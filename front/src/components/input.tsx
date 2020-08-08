import * as React from "react";

export interface ISubmittableInputProps {
  placeholder?: string;
  onSubmit: (s: string) => void;
}

export function SubmittableInput(props: ISubmittableInputProps) {
  const [val, setVal] = React.useState("");

  const onKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(ev);
    console.log(ev.currentTarget.value);
    if (ev.key == "Enter" && val) {
      props.onSubmit(val);
      setVal("");
      //   ev.currentTarget.value = "";
    }
  };

  const onClick = () => {
    if (val) {
      props.onSubmit(val);
      setVal("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder || ""}
        value={val}
        onKeyPress={onKeyPress}
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="input-group-append">
        <button onClick={onClick} className="btn btn-outline-secondary">
          Add
        </button>
      </div>
    </div>
  );
}
