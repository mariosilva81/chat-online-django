const chatMessages = document.querySelector(".messages");

const getMessages = async (roomId) => {
  const response = await fetch(`/${roomId}`);
  const html = await response.text();
  chatMessages.innerHTML = html;
};
