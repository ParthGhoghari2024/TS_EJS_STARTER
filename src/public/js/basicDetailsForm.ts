interface basicDetailsInterace {
  [Key: string]: FormDataEntryValue;
}
enum basicDetails {
  name,
  email,
  address,
  city,
  zipcode,
}

type failedValidationObjType = {
  [Key in basicDetails]?: string;
};

const validateForm = (
  basicDetailsObj: basicDetailsInterace
): failedValidationObjType => {
  const failedValidationObj: failedValidationObjType = {};

  if (!basicDetailsObj.name || basicDetailsObj.name.toString().length === 0)
    failedValidationObj[basicDetails.name] = "name";
  if (!basicDetailsObj.email || basicDetailsObj.email.toString().length === 0)
    failedValidationObj[basicDetails.email] = "email";
  if (
    !basicDetailsObj.address ||
    basicDetailsObj.address.toString().length === 0
  )
    failedValidationObj[basicDetails.address] = "address";
  if (!basicDetailsObj.city || basicDetailsObj.city.toString().length === 0)
    failedValidationObj[basicDetails.city] = "city";

  console.log(failedValidationObj);

  return failedValidationObj;
};
const submitBasicForm = async () => {
  const basicDetailsForm: HTMLFormElement = document.getElementById(
    "basicDetailsForm"
  ) as HTMLFormElement;
  const basicDetailsFormData: FormData = new FormData(basicDetailsForm);
  const basicDetailsObj: basicDetailsInterace = {};
  for (var [key, val] of basicDetailsFormData.entries()) {
    if (val && typeof val === "string") {
      val = val.trim();
    }
    basicDetailsObj[key] = val;
  }

  console.log(basicDetailsObj);

  const validationResult: failedValidationObjType =
    validateForm(basicDetailsObj);

  console.log("rs", validationResult);
  return;

  const basicDetailsFetchResult = await fetch("/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(basicDetailsObj),
  });

  const basicDetailsFetchJson = await basicDetailsFetchResult.json();

  if (
    basicDetailsFetchJson &&
    basicDetailsFetchJson.success === 1 &&
    basicDetailsFetchJson.result
  ) {
    alert("inserted");
  }
};
