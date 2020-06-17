function select(connection, sql, success) {
    connection.connect();
    connection.query(sql, function(err, result) {
        if (err == null) {
            success(result)
        } else {
            success(err);
        }
    });
    connection.end();
}

function update(connection, sql, data, success) {
    connection.query(sql, data, (error, results, fields) => {
        if (error) {
            return success(error.message);
        }
            // 返回1代表更新成功
        success("更新成功");
    });
    connection.end();
}

function insert(connection, addSql, addSqlParams, success) {
    connection.query(addSql, addSqlParams, function(err, result) {
        if (err) {
            success('[INSERT ERROR] - ', err.message);
            return;
        }

        success("添加成功");
    });
    connection.end();
}

function del(connection, sql, success) {
    connection.query(sql, function(err, result) {
        if (err) {
            success('[DELETE ERROR] - ', err.message);
            return;
        }
        success("删除成功");
    });
}
module.exports = {
    "select": select,
    "update": update,
    "insert": insert,
    "del": del
}