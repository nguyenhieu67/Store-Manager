function Form({
  title,
  onSubmit,
  children,
  submitText = "Submit",
  isSubmitting,
  buttonStyle,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-6.25 rounded-lg bg-white p-5 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">{title}</h2>

      {children}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 self-end rounded bg-green-500 px-6 py-2 text-white transition hover:bg-green-600 ${buttonStyle}`}
        >
          {isSubmitting ? "Processing..." : submitText}
        </button>
      </div>
    </form>
  );
}

export default Form;
