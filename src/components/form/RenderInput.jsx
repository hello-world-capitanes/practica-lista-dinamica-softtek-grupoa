

function RenderInput({ type, name, label, required }) {
    return type == "checkbox" ?
        (
            <div className="mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={name}
                    id={name}
                />
                <label
                    htmlFor={name}
                    className="form-check-label"
                ></label>
            </div>
        ) :
        (
            <div className="mb-3">
                <label
                    htmlFor={name}
                    className="form-label"
                >{label}</label>
                <input
                    className="form-control"
                    type={type}
                    name={name}
                    id={name}
                    required={required}
                />
            </div>
        );
}

export default RenderInput;