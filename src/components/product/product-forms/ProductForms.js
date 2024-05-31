import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const ProductForm = ({ setOpenModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		setOpenModal(true);
	};

	return (
		<form className="product_forms" onSubmit={handleSubmit(onSubmit)}>
			<div className="input-box">
				<input
					className={errors.name ? "input_error" : null}
					id="name"
					{...register("name", { required: "Ім'я обов'язкове" })}
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}
				<label className={errors.name ? "label_error" : null} htmlFor="name">
					Ваше ім'я:
				</label>
			</div>

			<div className="input-box">
				<InputMask
					mask="+38099-999-99-99"
					maskChar={null}
					{...register("phone", {
						required: "Телефон обов'язковий",
						pattern: {
							value: /^\+380\d{2}-\d{3}-\d{2}-\d{2}$/,
							message: "Невірний формат телефону",
						},
					})}
				>
					{(inputProps) => (
						<input
							{...inputProps}
							className={errors.phone ? "input_error" : null}
							type="tel"
							id="phone"
						/>
					)}
				</InputMask>
				{errors.phone && <p className="error">{errors.phone.message}</p>}
				<label className={errors.phone ? "label_error" : null} htmlFor="phone">
					Ваш телефон:
				</label>
			</div>

			<button type="submit">Відправити</button>
		</form>
	);
};

export default ProductForm;
