const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
