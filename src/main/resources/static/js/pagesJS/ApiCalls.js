var api = "http://localhost:8090";

function makeAjaxCall(_url, methodType, _data) {
    var promiseObj = new Promise(function (resolve, reject) {
        
        if (_data === null) {
            $.ajax({
                type: methodType,
                url: _url,
                success: function (json) {

                    try {
                        resolve(json);
                    } catch (e) {
                        console.log(e);
                    }
                    
                },
                error: function (xhr, status, error) {
                    reject(xhr.responseText);
                }

            });
        } else {
            $.ajax({
                type: methodType,
                url: _url,
                contentType: 'application/json',
                data: JSON.stringify(_data),
                dataType: 'json',
                success: function (json) {
                    resolve(json);
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        }
    }); 
    return promiseObj;
}


//GET /error API call
function getError(resolved, rejected) {
    try {

        var endpoint = "/error";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

//GET /error API call
function getActivityCode(resolved, rejected) {
    try {

        var endpoint = "/activityCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getbudgetObjectCode(resolved, rejected) {
    try {

        var endpoint = "/budgetObjectCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getBudgetSummary(type, financialYear, verified, resolved, rejected) {
    try {

        var endpoint = "/budgetSummary";
        var url = api + endpoint + "/" + type + "/" + financialYear + "/" + verified;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getEmployeeProfiles(resolved, rejected) {
    try {

        var endpoint = "/employeeProfile";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getEmployeeProfileById(resolved, rejected, id) {
    try {

        var endpoint = "/employeeProfile/" + id;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function postExpense(resolved, rejected, data) {
    try {
        var endpoint = "/expense";
        var url = api + endpoint;
        makeAjaxCall(url, "POST", data).then(resolved, rejected);
    } catch (e) {
        console.log("error - " + e);
    }
}

function getExpenseCode(financialYear, resolved, rejected) {

    try {

        var endpoint = "/expenseCode";
        if (financialYear != null) {
            url = api + endpoint + "?financialYear=" + financialYear;
        } else {
            url = api + endpoint;
        }
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function deleteExpenseWithID(id, resolved, rejected) {
    try {

        var endpoint = "/expense";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "DELETE", null).then(resolved, rejected);

    } catch (e) {

        console.error(e);
        return "";

    }
}

function putExpenseWithID(resolved, rejected, data, id) {
    try {

        var endpoint = "/expense";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "PUT", data).then(resolved, rejected);

    } catch (e) {

        console.error(e);
        return "";

    }
}

function getJobCode(resolved, rejected, financialYear) {
    
    var endpoint = "/jobCode";
    var url = "";
    if (financialYear !== null) {
        url = api + endpoint;
    } else {
        url = api + endpoint + "?financialYear=" + financialYear;
    }
    makeAjaxCall(url, "GET", null).then(resolved, rejected);
}

function postJobCode(resolved, rejected, data) {
    try {

        var endpoint = "/jobCode";
        var url = api + endpoint;
        makeAjaxCall(url, "POST", data).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function deleteJobCodeEithID(resolved, rejected, id) {
    try {

        var endpoint = "/jobCode";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "DELETE", null).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function getJobCodeWithID(resolved, rejected, id) {
    try {

        var endpoint = "/jobCode";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function getPaymentCode(resolved, rejected) {
    try {

        var endpoint = "/paymentCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}


function getPayrollDetailsWithType(resolved, rejected, type) {
    try {

        var endpoint = "/payrollDetails/" + type;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollDetailsWithTypeAndJobCodeId(resolved, rejected, type, jobCodeId) {
    try {

        var endpoint = "/payrollDetails/" + type + "/" + jobCodeId;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollForecastWithType(resolved, rejected, type) {
    try {

        var endpoint = "/payrollForecast/" + type;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollForecastWithTypeAndJobCodeId(resolved, rejected, type, jobCodeId) {
    try {

        var endpoint = "/payrollForecast/" + type + "/" + jobCodeId;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function putEmployeeProfileWithID(resolved, rejected, data, id) {
    try {

        var endpoint = "/employeeProfile";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "PUT", data).then(resolved, rejected);

    } catch (e) {

        console.error(e);
        return "";

    }
}






