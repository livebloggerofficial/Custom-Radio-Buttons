const btn = document.querySelector(".custom-radio-buttons .btn");

btn.addEventListener("click", () => {
  const selectedTopic = document.querySelector(
    ".custom-radio-buttons .radio:checked"
  );

  if (selectedTopic) {
    const labelText =
      selectedTopic.nextElementSibling.querySelector("h2").textContent;

    alert(`Selected topic is ${labelText}`);
  }
});
