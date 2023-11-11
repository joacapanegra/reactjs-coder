import { Margin } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repetPassword: "",
    },

    onSubmit: (data) => {
      console.log("Contraseña:", data.password);
      console.log("se envió");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(5, "debe terner al menos 5 caracteres")
        .max(20, "no debe superar los 20 caracteres"),
      apellido: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El mail no parece valido debe contener @")
        .required("El campo es obligatorio"),
      password: Yup.string()
        .required("El campo es obligatorio")
        .matches(/^(?=.*[a-zA-Z0-9!@#$%^&*]).{6,}$/, {
          message: "La contraseña debe tener al menos 6 caracteres",
        }),
      repetPassword: Yup.string()
        .required("El campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repetir contraseña"
          variant="outlined"
          name="repetPassword"
          onChange={handleChange}
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
        />
        <div>
          <Button variant="contained" type="submit" style={{ margin: "10px" }}>
            Enviar
          </Button>

          <Button variant={"contained"} type="button">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutFormik;
