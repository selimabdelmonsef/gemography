let thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
// export var today = thirtyDaysAgo.getFullYear() + '-' + (thirtyDaysAgo.getMonth() + 1) + '-' + thirtyDaysAgo.getDate();


export var myDate = thirtyDaysAgo.getFullYear() + '-' +
    ('0' + (thirtyDaysAgo.getMonth() + 1)).slice(-2)
    + '-' + ('0' + thirtyDaysAgo.getDate()).slice(-2)

