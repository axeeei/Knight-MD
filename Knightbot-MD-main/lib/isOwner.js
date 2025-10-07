/* Made by axeeeh | owner: +918075169545 | premium: +918075169545 */

const settings = require('../settings');
const { isSudo } = require('./index');

async function isOwnerOrSudo(senderId) {
    // Get owner number from settings
    const ownerJid = settings.ownerNumber + "@s.whatsapp.net";
    if (senderId === ownerJid) return true;
    try {
        return await isSudo(senderId);
    } catch (e) {
        return false;
    }
}

module.exports = isOwnerOrSudo;