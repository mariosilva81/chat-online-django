const chatMessages = document.querySelector(".messages");

const setRoomActive = (roomId) => {
  document
    .querySelectorAll(".list-rooms li")
    .forEach((room) => room.classList.remove("active"));
  document.querySelector(`#room-${roomId}`).classList.add("active");
};

const getMessages = async (roomId) => {
  const response = await fetch(`/${roomId}`);
  const html = await response.text();
  chatMessages.innerHTML = html;
  setRoomActive(roomId);
};
