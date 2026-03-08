import { Fragment } from "react";
import Button from "../../components/Button";

function Search({ title, icon, placeholder, btnColor }) {
  return (
    <Fragment>
      <div>
        <input
          placeholder={placeholder}
          spellCheck={false}
          autoComplete="false"
          className="w-87.5 rounded-[25px] border border-solid border-[#dddddd] px-5 py-2.5 outline-none"
        />
      </div>
      <div>
        <Button leftIcon={icon} className={`${btnColor} text-white`}>
          {title}
        </Button>
      </div>
    </Fragment>
  );
}

export default Search;
