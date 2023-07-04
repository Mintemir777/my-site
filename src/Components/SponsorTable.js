import React from "react";
import logocloud from "../logo-cloud.png";
import humanlogo from "../human-logo.png";
const SponsorTable = () => {
  return (
    <table className="sponsor-table">
      <tbody>
        <tr>
          <td className="logo-cell">
            <img src={logocloud} alt="Logo 1" className="logo-fix" />
          </td>
          <td className="text-cell text serious ">Build a future with us</td>
        </tr>
        <tr>
          <td className="logo-cell">
            <img src={humanlogo} alt="Logo 2" />
          </td>
          <td className="text-cell">SPONSORS</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SponsorTable;


