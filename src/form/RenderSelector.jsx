import { useId } from "react";

function RenderSelector({name, label, values}){

    return (
        <div className="mb-3">
            <label
                htmlFor={name}
                className="form-label"
            >{label}</label>
            <select className="form-select" name={name} id={name}>
                {values.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default RenderSelector;