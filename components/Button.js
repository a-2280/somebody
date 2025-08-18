export default function Button({ text }) {
  function handleClick(e) {
    const form = document.getElementById("form");
    const input = document.getElementById("contact");
    const textarea = document.getElementById("message");

    // Check if form is valid before proceeding
    if (input.value.trim() && textarea.value.trim()) {
      // Form is valid - allow submission to Netlify
      return true;
    } else {
      // Form is invalid - prevent submission and show error state
      e.preventDefault();
      form.classList.add("submitted");
      input.placeholder = "You need a contact.";
      textarea.placeholder = "You need a message.";
    }
  }

  return (
    <button
      className="w-fit mt-4 border border-grey px-2"
      type="submit"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
