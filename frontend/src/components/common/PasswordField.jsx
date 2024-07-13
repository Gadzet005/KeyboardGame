export const PasswordField = ({ name = "password", label = "Пароль" }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="password"
        name={name}
        autoComplete="current-password"
        className="form-control"
        id={name}
      />
    </div>
  );
};
