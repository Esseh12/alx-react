export function getFullYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
};

export function getFoterCopy(isIndex) {
    if (isIndex === true) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
};

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD"
};