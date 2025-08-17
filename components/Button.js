export default function Button({ text }) {
  function handleClick(e) {
    e.preventDefault();

    const form = document.getElementById("form");
    const input = document.querySelector("input");
    const textarea = document.querySelector("textarea");

    // Check if form is valid before proceeding
    if (input.value.trim() && textarea.value.trim()) {
      // Form is valid - navigate to success page
      window.location.href = "/contact";
    } else {
      // Form is invalid - show error state
      form.classList.add("submitted");
      input.placeholder = "You need a contact.";
      textarea.placeholder = "You need a message.";
    }
  }

  return (
    <button
      className="w-fit mt-4 border border-grey px-2"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
