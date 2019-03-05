//this class needs to be optimized, but it works
tableCreator = {};

tableCreator.createTRwithTDs = function (colIdAttr, colClassAttr, rows) {
    
    var htmlStr = '<tr';
    if (colIdAttr != null && colIdAttr != undefined) {
        htmlStr = ' id="' + colIdAttr + '"';
    }

    if (colClassAttr != null && colClassAttr != undefined) {
        htmlStr = htmlStr + ' class="' + colClassAttr + '"';
    }
    htmlStr = htmlStr + '>';
    for (x in rows) {
        var row = rows[x];
        htmlStr + htmlStr + row;
    }

    htmlStr = htmlStr + '</tr>';
    return htmlStr;
};

tableCreator.constructTable = function (colRowData, table_id, table_class) {
    var htmlStr = '<table ';


    if (table_id != null && table_id != undefined) {
        htmlStr = htmlStr + 'id="' + table_id + '"';
    }

    if (table_class != null && table_class != undefined) {
        htmlStr = htmlStr + ' class="' + table_class + '"';
    }

    htmlStr = htmlStr + colRowData + '</table>';
    //this.html = htmlStr;
    return htmlStr;
};

tableCreator.createTD = function (cellData, rowidAttr, rowclassAttr) {

    var htmlStr = "";

    if (rowidAttr != null && rowidAttr != undefined) {
        htmlStr = '<td id="' + rowidAttr + '"';
    }

    if (rowclassAttr != null && rowclassAttr != undefined) {
        htmlStr = htmlStr + ' class="' + rowclassAttr + '"';
    }
    htmlStr = htmlStr + '>';

    htmlStr = htmlStr + cellData + '</td>';
    return htmlStr;
};


/**
 * This is the main function, create TD oibjects to put into TR objects and enter that as a TR object Array to create HTML code of a table
 * @param {TR object array} col an array of TR objects
 */
tableCreator.createTable = function (col, tableID, tableClass) {

    var col_html = [];

    for (c in col) {
        var single_col = col[c];
        var row_html = [];
        for (r in single_col.rowData) {
            var row = single_col.rowData[r];
            var row_ret = tableCreator.createTD(row.data, row.idAttr, row.classAttr);
            row_html.push(row_ret);
        }
        var col_ret =tableCreator.createTRwithTDs(single_col.idAttrib, single_col.classAttrib, row_html);
        col_html.push(col_ret);
    }
    var table_html = tableCreator.constructTable(col_html, tableID, tableClass);
    return table_html;
};


/**
 * Basic function to create the row object for you with the data you give it.
 * @param {string} data_row what to show in the cell
 * @param {string} idAttr_row the TD id html attribute
 * @param {string} classAttr_row the Class html attribute
 * @return {td object} 
 */
tableCreator.createTDobject = function (data_row, idAttr_row, classAttr_row) {
    var rowObj = {
        data: data_row,
        idAttr: idAttr_row,
        classAttr: classAttr_row
    };
    return rowObj;
};

/**
 * 
 * @param {td object array} rows An array of row objects to generate a single row per TR object
 * @param {string} idAttr_col the id HTML attribute
 * @param {string} classAttr_col the class HTML attribute
 * @return {TR object}
 */
tableCreator.createTRobject = function (rows, idAttr_col, classAttr_col) {
    var col_obj = {
        rowData: rows,
        idAttrib: idAttr_col,
        classAttrib: classAttr_col
    };
    return col_obj;
};



