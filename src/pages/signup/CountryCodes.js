import React from 'react';

function CountryCode() {
  return (
    <select name="countryCode" id="">
      <option data-countryCode="KR" value="82">
        South Korea (+82)
      </option>
      <optgroup label="Other countries">
        <option data-countryCode="DZ" value="213">
          Algeria (+213)
        </option>
        <option data-countryCode="AD" value="376">
          Andorra (+376)
        </option>
        <option data-countryCode="AO" value="244">
          Angola (+244)
        </option>
        <option data-countryCode="AI" value="1264">
          Anguilla (+1264)
        </option>
        <option data-countryCode="AG" value="1268">
          Antigua &amp; Barbuda (+1268)
        </option>
        <option data-countryCode="AR" value="54">
          Argentina (+54)
        </option>
        <option data-countryCode="AM" value="374">
          Armenia (+374)
        </option>
        <option data-countryCode="AW" value="297">
          Aruba (+297)
        </option>
        <option data-countryCode="AU" value="61">
          Australia (+61)
        </option>
        <option data-countryCode="AT" value="43">
          Austria (+43)
        </option>
        <option data-countryCode="AZ" value="994">
          Azerbaijan (+994)
        </option>
        <option data-countryCode="BS" value="1242">
          Bahamas (+1242)
        </option>
        <option data-countryCode="BH" value="973">
          Bahrain (+973)
        </option>
        <option data-countryCode="BD" value="880">
          Bangladesh (+880)
        </option>
        <option data-countryCode="BB" value="1246">
          Barbados (+1246)
        </option>
        <option data-countryCode="BY" value="375">
          Belarus (+375)
        </option>
      </optgroup>
    </select>
  );
}

export default CountryCode;
