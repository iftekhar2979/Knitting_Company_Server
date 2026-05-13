const db = require('../models');
const { generateHashedPassword } = require('../utils/generateHashedPassword');
const config = require('../src/config/config');

const statements = [
  {
    name: 'users',
    sql: `CREATE TABLE IF NOT EXISTS users (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NULL,
      email VARCHAR(255) NULL,
      email_verified_at TIMESTAMP NULL,
      password VARCHAR(255) NULL,
      isAdmin TINYINT(1) NOT NULL DEFAULT 0,
      role VARCHAR(255) NULL,
      isBlock TINYINT(1) NOT NULL DEFAULT 0,
      remember_token VARCHAR(100) NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY users_email_unique (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'password_reset_tokens',
    sql: `CREATE TABLE IF NOT EXISTS password_reset_tokens (
      email VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL,
      created_at TIMESTAMP NULL,
      PRIMARY KEY (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'sessions',
    sql: `CREATE TABLE IF NOT EXISTS sessions (
      id VARCHAR(255) NOT NULL,
      user_id BIGINT UNSIGNED NULL,
      ip_address VARCHAR(45) NULL,
      user_agent TEXT NULL,
      payload LONGTEXT NOT NULL,
      last_activity INT NOT NULL,
      PRIMARY KEY (id),
      KEY sessions_user_id_index (user_id),
      KEY sessions_last_activity_index (last_activity)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'cache',
    sql: `CREATE TABLE IF NOT EXISTS cache (
      \`key\` VARCHAR(255) NOT NULL,
      value MEDIUMTEXT NOT NULL,
      expiration BIGINT NOT NULL,
      PRIMARY KEY (\`key\`),
      KEY cache_expiration_index (expiration)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'cache_locks',
    sql: `CREATE TABLE IF NOT EXISTS cache_locks (
      \`key\` VARCHAR(255) NOT NULL,
      owner VARCHAR(255) NOT NULL,
      expiration BIGINT NOT NULL,
      PRIMARY KEY (\`key\`),
      KEY cache_locks_expiration_index (expiration)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'jobs',
    sql: `CREATE TABLE IF NOT EXISTS jobs (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      queue VARCHAR(255) NOT NULL,
      payload LONGTEXT NOT NULL,
      attempts SMALLINT UNSIGNED NOT NULL,
      reserved_at INT UNSIGNED NULL,
      available_at INT UNSIGNED NOT NULL,
      created_at INT UNSIGNED NOT NULL,
      PRIMARY KEY (id),
      KEY jobs_queue_index (queue)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'job_batches',
    sql: `CREATE TABLE IF NOT EXISTS job_batches (
      id VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      total_jobs INT NOT NULL,
      pending_jobs INT NOT NULL,
      failed_jobs INT NOT NULL,
      failed_job_ids LONGTEXT NOT NULL,
      options MEDIUMTEXT NULL,
      cancelled_at INT NULL,
      created_at INT NOT NULL,
      finished_at INT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'failed_jobs',
    sql: `CREATE TABLE IF NOT EXISTS failed_jobs (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      uuid VARCHAR(255) NOT NULL,
      connection TEXT NOT NULL,
      queue TEXT NOT NULL,
      payload LONGTEXT NOT NULL,
      exception LONGTEXT NOT NULL,
      failed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY failed_jobs_uuid_unique (uuid)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'companies',
    sql: `CREATE TABLE IF NOT EXISTS companies (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      companyName VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      email VARCHAR(255) NULL,
      contact VARCHAR(255) NULL,
      shortForm TEXT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY companies_companyName_unique (companyName),
      UNIQUE KEY companies_email_unique (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'buyers',
    sql: `CREATE TABLE IF NOT EXISTS buyers (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      buyerName TEXT NULL,
      companyId BIGINT UNSIGNED NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY buyers_companyId_foreign (companyId),
      CONSTRAINT buyers_companyId_foreign FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'fabrics_types',
    sql: `CREATE TABLE IF NOT EXISTS fabrics_types (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      fabricsName TEXT NOT NULL,
      description TEXT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'proforma_invoices',
    sql: `CREATE TABLE IF NOT EXISTS proforma_invoices (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      style TEXT NULL,
      fabricsName TEXT NOT NULL,
      fabricsId BIGINT UNSIGNED NULL,
      description TEXT NULL,
      finishDia TEXT NULL,
      unitPrice DOUBLE NOT NULL,
      totalQuantity INT NULL,
      amount DOUBLE NOT NULL,
      companyId BIGINT UNSIGNED NOT NULL,
      buyerId BIGINT UNSIGNED NULL,
      containOrders TEXT NOT NULL,
      piName TEXT NOT NULL,
      piNumber TEXT NOT NULL,
      invoiceAmount DOUBLE NOT NULL,
      invoiceQuantity DOUBLE NOT NULL,
      season TEXT NOT NULL,
      billingWay TEXT NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY proforma_invoices_fabricsId_foreign (fabricsId),
      KEY proforma_invoices_companyId_foreign (companyId),
      KEY proforma_invoices_buyerId_foreign (buyerId),
      CONSTRAINT proforma_invoices_fabricsId_foreign FOREIGN KEY (fabricsId) REFERENCES fabrics_types(id) ON DELETE SET NULL,
      CONSTRAINT proforma_invoices_companyId_foreign FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE CASCADE,
      CONSTRAINT proforma_invoices_buyerId_foreign FOREIGN KEY (buyerId) REFERENCES buyers(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'orders',
    sql: `CREATE TABLE IF NOT EXISTS orders (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      orderNumber VARCHAR(255) NOT NULL,
      companyId BIGINT UNSIGNED NOT NULL,
      buyerId BIGINT UNSIGNED NULL,
      companyName TEXT NULL,
      fabricsName TEXT NOT NULL,
      fabricsId BIGINT UNSIGNED NULL,
      buyerName TEXT NOT NULL,
      season TEXT NULL,
      programNumber TEXT NULL,
      jobNumber TEXT NULL,
      bookingNumber TEXT NULL,
      sbNumber TEXT NULL,
      orderedDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      targetDate TIMESTAMP NULL,
      orderQuantity DOUBLE NOT NULL,
      deliveredQuantity DOUBLE NOT NULL DEFAULT 0,
      restQuantity DOUBLE NOT NULL,
      unit TEXT NOT NULL,
      status TEXT NULL,
      isBillCreated TINYINT(1) NOT NULL DEFAULT 0,
      isProformaInvoiceCreated TINYINT(1) NOT NULL DEFAULT 0,
      userId BIGINT UNSIGNED NULL,
      billNumber TEXT NULL,
      unitPrice DOUBLE NULL,
      proformaInvoiceId TEXT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY orders_orderNumber_unique (orderNumber),
      KEY orders_companyId_foreign (companyId),
      KEY orders_buyerId_foreign (buyerId),
      KEY orders_fabricsId_foreign (fabricsId),
      KEY orders_userId_foreign (userId),
      CONSTRAINT orders_companyId_foreign FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE CASCADE,
      CONSTRAINT orders_buyerId_foreign FOREIGN KEY (buyerId) REFERENCES buyers(id) ON DELETE SET NULL,
      CONSTRAINT orders_fabricsId_foreign FOREIGN KEY (fabricsId) REFERENCES fabrics_types(id) ON DELETE SET NULL,
      CONSTRAINT orders_userId_foreign FOREIGN KEY (userId) REFERENCES users(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'order_details',
    sql: `CREATE TABLE IF NOT EXISTS order_details (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      orderId BIGINT UNSIGNED NULL,
      style TEXT NULL,
      yarnCount TEXT NULL,
      yarnBrand TEXT NULL,
      yarnLot TEXT NULL,
      lycraCount TEXT NULL,
      lycraBrand TEXT NULL,
      lycraLot TEXT NULL,
      polyStarCount TEXT NULL,
      polyStarBrand TEXT NULL,
      polyStarLot TEXT NULL,
      mc_DIA TEXT NULL,
      e_DIA TEXT NULL,
      f_GSM TEXT NULL,
      sl TEXT NULL,
      colour TEXT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY order_details_orderId_unique (orderId),
      CONSTRAINT order_details_orderId_foreign FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'yarn_informations',
    sql: `CREATE TABLE IF NOT EXISTS yarn_informations (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      companyId BIGINT UNSIGNED NOT NULL,
      ReceivingQuantity DOUBLE NOT NULL,
      restQuantity DOUBLE NOT NULL,
      yarnType TEXT NOT NULL,
      descriptionOfYarn LONGTEXT NOT NULL,
      orderId BIGINT UNSIGNED NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY yarn_informations_companyId_foreign (companyId),
      KEY yarn_informations_orderId_foreign (orderId),
      CONSTRAINT yarn_informations_companyId_foreign FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE CASCADE,
      CONSTRAINT yarn_informations_orderId_foreign FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'yarn_information_with_details',
    sql: `CREATE TABLE IF NOT EXISTS yarn_information_with_details (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      yarnInfoID BIGINT UNSIGNED NOT NULL,
      returnQuantity DOUBLE NOT NULL,
      westQuantity DOUBLE NULL,
      role TEXT NOT NULL,
      vechileNumber TEXT NULL,
      deliveredBy TEXT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY yarn_information_with_details_yarnInfoID_foreign (yarnInfoID),
      CONSTRAINT yarn_information_with_details_yarnInfoID_foreign FOREIGN KEY (yarnInfoID) REFERENCES yarn_informations(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'delivery_details',
    sql: `CREATE TABLE IF NOT EXISTS delivery_details (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      orderId BIGINT UNSIGNED NOT NULL,
      deliveredQuantity DOUBLE NOT NULL,
      fabricDeliveredQuantity DOUBLE NULL,
      GrayDeliveredQuantity DOUBLE NULL,
      unitPrice DOUBLE NULL,
      billNumber TEXT NULL,
      deliveredBy TEXT NULL,
      colour TEXT NULL,
      vechileNumber TEXT NULL,
      roleQuantity INT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY delivery_details_orderId_foreign (orderId),
      CONSTRAINT delivery_details_orderId_foreign FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'bill_informations',
    sql: `CREATE TABLE IF NOT EXISTS bill_informations (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      billNumber TEXT NULL,
      unitPrice DOUBLE NOT NULL,
      amount DOUBLE NOT NULL,
      invoiceAmount DOUBLE NOT NULL,
      invoiceQuantity DOUBLE NOT NULL,
      containOrders TEXT NOT NULL,
      companyId BIGINT UNSIGNED NOT NULL,
      buyerId BIGINT UNSIGNED NULL,
      fabricsId BIGINT UNSIGNED NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY bill_informations_companyId_foreign (companyId),
      KEY bill_informations_buyerId_foreign (buyerId),
      KEY bill_informations_fabricsId_foreign (fabricsId),
      CONSTRAINT bill_informations_companyId_foreign FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE CASCADE,
      CONSTRAINT bill_informations_buyerId_foreign FOREIGN KEY (buyerId) REFERENCES buyers(id) ON DELETE SET NULL,
      CONSTRAINT bill_informations_fabricsId_foreign FOREIGN KEY (fabricsId) REFERENCES fabrics_types(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'delivery_men',
    sql: `CREATE TABLE IF NOT EXISTS delivery_men (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      name TEXT NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'months',
    sql: `CREATE TABLE IF NOT EXISTS months (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      name TEXT NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'notifications',
    sql: `CREATE TABLE IF NOT EXISTS notifications (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      content TEXT NOT NULL,
      route TEXT NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'user_notifications',
    sql: `CREATE TABLE IF NOT EXISTS user_notifications (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      userId BIGINT UNSIGNED NOT NULL,
      notificationId BIGINT UNSIGNED NOT NULL,
      isViewed TINYINT(1) NOT NULL DEFAULT 0,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY user_notifications_userId_notificationId_unique (userId, notificationId),
      KEY user_notifications_notificationId_foreign (notificationId),
      CONSTRAINT user_notifications_userId_foreign FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
      CONSTRAINT user_notifications_notificationId_foreign FOREIGN KEY (notificationId) REFERENCES notifications(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'password_otps',
    sql: `CREATE TABLE IF NOT EXISTS password_otps (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      otp TEXT NOT NULL,
      expiresAt TIMESTAMP NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY password_otps_email_index (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'posts',
    sql: `CREATE TABLE IF NOT EXISTS posts (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      content TEXT NULL,
      published TINYINT(1) NOT NULL DEFAULT 0,
      authorId BIGINT UNSIGNED NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY posts_authorId_foreign (authorId),
      CONSTRAINT posts_authorId_foreign FOREIGN KEY (authorId) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
  {
    name: 'profiles',
    sql: `CREATE TABLE IF NOT EXISTS profiles (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      bio VARCHAR(255) NULL,
      jobTitle VARCHAR(255) NULL,
      description VARCHAR(255) NULL,
      userId BIGINT UNSIGNED NOT NULL,
      created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY profiles_userId_unique (userId),
      CONSTRAINT profiles_userId_foreign FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  },
];

const expectedTables = statements.map(({ name }) => name);

async function seedAdmin() {
  const existing = await db.User.findOne({ where: { email: config.ADMIN_EMAIL } });

  if (existing) {
    return false;
  }

  const password = await generateHashedPassword(config.ADMIN_PASSWORD);
  await db.User.create({
    name: config.ADMIN_NAME,
    email: config.ADMIN_EMAIL,
    password,
    isAdmin: true,
    role: config.ADMIN_ROLE,
  });

  return true;
}

async function migrate() {
  await db.sequelize.authenticate();

  for (const statement of statements) {
    await db.sequelize.query(statement.sql);
    console.log(`ok ${statement.name}`);
  }

  const seeded = await seedAdmin();
  console.log(seeded ? 'ok admin seeded' : 'ok admin exists');
}

async function check() {
  await db.sequelize.authenticate();

  const [rows] = await db.sequelize.query('SHOW TABLES');
  const existingTables = new Set(
    rows.map((row) => Object.values(row)[0])
  );

  const missingTables = expectedTables.filter((table) => !existingTables.has(table));

  if (missingTables.length) {
    console.error(`missing tables: ${missingTables.join(', ')}`);
    process.exitCode = 1;
    return;
  }

  console.log(`ok ${expectedTables.length} expected Laravel tables exist`);
}

const command = process.argv[2] || 'up';
const commands = { up: migrate, check };

if (!commands[command]) {
  console.error(`Unknown migrate command "${command}". Use "up" or "check".`);
  process.exit(1);
}

commands[command]()
  .then(() => db.sequelize.close())
  .catch(async (error) => {
    console.error(error.message);
    await db.sequelize.close().catch(() => {});
    process.exit(1);
  });
