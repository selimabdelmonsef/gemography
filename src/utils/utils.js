let thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
export var today = thirtyDaysAgo.getFullYear() + '-' + (thirtyDaysAgo.getMonth() + 1) + '-' + thirtyDaysAgo.getDate();

// let page = '&page='
// export var pageNumber = 1;
// export var current_page = page + pageNumber;