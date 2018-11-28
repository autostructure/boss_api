var api = "/boss/";

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
                data: _data,
                contentType: "application/json",
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
function getErrorApiCall(resolved, rejected) {
    try {

        var endpoint = "/boss/error";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

//GET /error API call
function getActivityCodeApiCall(resolved, rejected) {
    try {

        var endpoint = "/boss/activityCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getbudgetObjectCodeApiCall(resolved, rejected) {
    try {

        var endpoint = "/boss/budgetObjectCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getBudgetSummaryApiCall(type, financialYear, verified, resolved, rejected) {
    try {

        var endpoint = "/boss/budgetSummary";
        var url = api + endpoint + "/" + type + "/" + financialYear + "/" + verified;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getEmployeeProfileApiCall(resolved, rejected) {
    try {

        var endpoint = "/boss/employeeProfile";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function postExpense(resolved, rejected, data) {
    try {
        var endpoint = "/boss/expense";
        var url = api + endpoint;
        makeAjaxCall(url, "POST", data).then(resolved, rejected);
    } catch (e) {
        console.log("error - " + e);
    }
}

function getExpenseCodeApiCall(financialYear, resolved, rejected) {

    try {

        var endpoint = "/boss/expenseCode";
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

function deleteExpenseWithIDApiCall(id, resolved, rejected) {
    try {

        var endpoint = "/boss/expense";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "DELETE", null).then(resolved, rejected);

    } catch (e) {

        console.error(e);
        return "";

    }
}

function putExpenseWithIDApiCall(resolved, rejected, data, id) {
    try {

        var endpoint = "/boss/expense";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "PUT", data).then(resolved, rejected);

    } catch (e) {

        console.error(e);
        return "";

    }
}

function getJobCodeApiCall(resolved, rejected, financialYear) {

    var endpoint = "/boss/jobCode";
    var url = "";
    if (financialYear !== null) {
        url = api + endpoint;
    } else {
        url = api + endpoint + "?financialYear=" + financialYear;
    }
    makeAjaxCall(url, "GET", null).then(resolved, rejected);
}

function postJobCodeApiCall(resolved, rejected, data) {
    try {

        var endpoint = "/boss/employeeProfile";
        var url = api + endpoint;
        makeAjaxCall(url, "POST", data).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function postAuxContact(resolved, rejected, data) {
    try {

        var endpoint = "/boss/contact";
        var url = api + endpoint;
        makeAjaxCall(url, "POST", data).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function deleteJobCodeEithIDApiCall(resolved, rejected, id) {
    try {

        var endpoint = "/boss/jobCode";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "DELETE", null).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function getJobCodeWithIDApiCall(resolved, rejected, id) {
    try {

        var endpoint = "/boss/jobCode";
        var url = api + endpoint + "/" + id;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {
        console.log(e);
        return "";

    }
}

function getPaymentCodeApiCall(resolved, rejected) {
    try {

        var endpoint = "/boss/paymentCode";
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}


function getPayrollDetailsWithType(resolved, rejected, type) {
    try {

        var endpoint = "/boss/payrollDetails/" + type;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollDetailsWithTypeAndJobCodeId(resolved, rejected, type, jobCodeId) {
    try {

        var endpoint = "/boss/payrollDetails/" + type + "/" + jobCodeId;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollForecastWithType(resolved, rejected, type) {
    try {

        var endpoint = "/boss/payrollForecast/" + type;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

function getPayrollForecastWithTypeAndJobCodeId(resolved, rejected, type, jobCodeId) {
    try {

        var endpoint = "/boss/payrollForecast/" + type + "/" + jobCodeId;
        var url = api + endpoint;
        makeAjaxCall(url, "GET", null).then(resolved, rejected);

    } catch (e) {

        console.log(e);
        return "";

    }
}

/**
 * Put some information into an entity without leaving everything else null.
 * @param {string} url The url of the API.
 * @param {number} id The id of the entity to update
 * @param {object} partial A keyed array of properties to update
 * @param {function} resolved
 * @param {function} rejected
 */
function putPartialInfo(url, id, partial, resolved, rejected) {
    resolved = resolved || function () {}
    rejected = rejected || function (a, b, c) {
        console.log(a);
        console.log(a.responseJSON);
        console.log(b);
        console.log(c);
        //break
    }
    if (id == 0) {
        $.ajax({
            type: 'POST',
            url: url,
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(partial),
            cache: false,
            timeout: 600000,
            success: resolved,
            error: rejected,
        });
    } else {
        $.ajax({
            type: 'GET',
            url: url + "/" + id,
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (json) {
                for (k in partial) {
                    json[k] = partial[k];
                }
                $.ajax({
                    type: 'PUT',
                    url: url + "/" + id,
                    contentType: "application/json",
                    dataType: 'json',
                    cache: false,
                    timeout: 600000,
                    data: JSON.stringify(json),
                    success: resolved,
                    error: rejected,
                });
            },
            error: rejected
        });
    }
}








