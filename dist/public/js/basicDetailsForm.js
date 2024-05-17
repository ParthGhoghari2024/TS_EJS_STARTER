"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var basicDetails;
(function (basicDetails) {
    basicDetails[basicDetails["name"] = 0] = "name";
    basicDetails[basicDetails["email"] = 1] = "email";
    basicDetails[basicDetails["address"] = 2] = "address";
    basicDetails[basicDetails["city"] = 3] = "city";
    basicDetails[basicDetails["zipcode"] = 4] = "zipcode";
})(basicDetails || (basicDetails = {}));
const validateForm = (basicDetailsObj) => {
    const failedValidationObj = {};
    if (!basicDetailsObj.name || basicDetailsObj.name.toString().length === 0)
        failedValidationObj[basicDetails.name] = "name";
    if (!basicDetailsObj.email || basicDetailsObj.email.toString().length === 0)
        failedValidationObj[basicDetails.email] = "email";
    if (!basicDetailsObj.address ||
        basicDetailsObj.address.toString().length === 0)
        failedValidationObj[basicDetails.address] = "address";
    if (!basicDetailsObj.city || basicDetailsObj.city.toString().length === 0)
        failedValidationObj[basicDetails.city] = "city";
    console.log(failedValidationObj);
    return failedValidationObj;
};
const submitBasicForm = () => __awaiter(void 0, void 0, void 0, function* () {
    const basicDetailsForm = document.getElementById("basicDetailsForm");
    const basicDetailsFormData = new FormData(basicDetailsForm);
    const basicDetailsObj = {};
    for (var [key, val] of basicDetailsFormData.entries()) {
        if (val && typeof val === "string") {
            val = val.trim();
        }
        basicDetailsObj[key] = val;
    }
    console.log(basicDetailsObj);
    const validationResult = validateForm(basicDetailsObj);
    console.log("rs", validationResult);
    return;
    const basicDetailsFetchResult = yield fetch("/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(basicDetailsObj),
    });
    const basicDetailsFetchJson = yield basicDetailsFetchResult.json();
    if (basicDetailsFetchJson &&
        basicDetailsFetchJson.success === 1 &&
        basicDetailsFetchJson.result) {
        alert("inserted");
    }
});
