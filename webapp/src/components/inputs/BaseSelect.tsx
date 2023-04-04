import React from "react";
import type { BaseSelect as BaseSelectType } from "../../shared/shareddtypes";
import "../../public/css/components/inputs/baseSelect/BaseSelect.scss";


function BaseSelect({
  id,
  label,
  name,
  options,
  showContent,
  handleChange,
  styles
}: BaseSelectType) {

  const selectId = id || crypto.randomUUID();

  return (
    <div className="base-select-container">
      <label htmlFor={selectId}>{label}</label>
      <select
        //onChange={handleChange}
        onChange={handleChange}
        name={name}
        id={selectId}
        className="base-select-item"
        style={styles as React.CSSProperties}
      >
        {options.map((opt) => {
          return (
            <option key={opt.value + crypto.randomUUID} value={opt.value}>
              {showContent ? opt.content : opt.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default BaseSelect;
