import './commands'

// On log change, check new item for truncation (if over 25 characters)
Cypress.on('log:changed', () => {
    const logList = window.top.document.querySelectorAll('.command-message-text');
    const newLog = logList.item(logList.length-1);
    if(newLog.textContent.length > 25) {
        newLog.textContent = `${newLog.textContent.slice(0, 25)}...`
    }
})