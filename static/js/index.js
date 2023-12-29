const setRoomActive = (roomId) => {
  document
  .querySelectorAll(".list-rooms li")
  .forEach((room) => room.classList.remove("active"));
  document.querySelector(`#room-${roomId}`).classList.add("active");
  document.querySelector("#selected-room").value = roomId;
  localStorage.setItem("newChat-room", roomId);
};

const getMessages = async (roomId) => {
  const response = await fetch(`/${roomId}`);
  const html = await response.text();
  const chatMessages = document.querySelector(".messages");
  chatMessages.innerHTML = html;
  setRoomActive(roomId);
};

const sendMessage = async (data) => {
  const response = await fetch(`/${data.room_id}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": data.csrfmiddlewaretoken,
    },
    body: JSON.stringify(data),
  });
  const html = await response.text();
  const uniqueMessageContainer = document.querySelector(".unique-message-container");
  uniqueMessageContainer.insertAdjacentHTML("beforeend", html);
  document.querySelector(".form").reset();
};

const createRoom = async (data) => {
  const response = await fetch(`/create-room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": data.csrfmiddlewaretoken,
    },
    body: JSON.stringify(data),
  });
  const html = await response.text();
  const listRooms = document.querySelector(".list-rooms");
  listRooms.insertAdjacentHTML("afterbegin", html);
  const modal = bootstrap.Modal.getInstance(document.querySelector(".modal"));
  modal.hide();
  document.querySelector(".create-room").reset();
};

document.querySelector(".send-message").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  sendMessage(data);
});

getMessages(localStorage.getItem("newChat-room") || 1);