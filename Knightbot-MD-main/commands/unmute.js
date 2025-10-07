/* Made by axeeeh | owner: +918075169545 | premium: +918075169545 */

async function unmuteCommand(sock, chatId) {
    await sock.groupSettingUpdate(chatId, 'not_announcement'); // Unmute the group
    await sock.sendMessage(chatId, { text: 'The group has been unmuted.' });
}

module.exports = unmuteCommand;