
async function getCountsByDateRange(range) {
    const now = new Date();
    let startDate, endDate;
  
    switch (range) {
      case 'last24Hours':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        endDate = now;
        break;
      case 'thisWeek':
        const startOfWeek = now.getDate() - now.getDay();
        startDate = new Date(now.setDate(startOfWeek));
        endDate = now;
        break;
      case 'thisMonth':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = now;
        break;
      case 'thisYear':
        startDate = new Date(now.getFullYear(), 0, 1);
        endDate = now;
        break;
      case 'allTime':
        startDate = new Date(0); // Unix epoch
        endDate = now;
        break;
      default:
        throw new Error('Invalid date range');
    }
}
module.exports={getCountsByDateRange}