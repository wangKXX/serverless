const Mock = require('mockjs')

function getUpdataList(pageSize, currentPage, tenantCode) {
    if (!tenantCode) {
        return {
            errorCode: 403,
            hitMesg: '请先去登录'
        }
    }
    if (!pageSize || !currentPage) {
        return {
            errorCode: 422,
            hitMesg: '参数类型错误'
        };
    };
    const data = [];
    for (let i = 0; i < pageSize; i++) {
        let uploadFileList = Mock.mock({
            'id|+1': 1,
            'createTime': Mock.Random.date(),
            'allCount': Mock.Random.natural(1000, 9999),
            'success': Mock.Random.natural(0, 1),
            'fail': Mock.Random.natural(0, 1),
            'status': Mock.Random.natural(0, 2),
            'errorMsg': '错误原因错误原因错误原因错误原因错误原因错误原因错误原因'
        });
        data.push(uploadFileList);
    }
    return {
        data: {
            list: data,
            page: {
                page: currentPage,
                count: 100
            }
        },
        code: 0
    };
}

function getDownloadList(pageSize, currentPage, tenantCode) {
    if (!tenantCode) {
        return {
            errorCode: 403,
            hitMesg: '请先去登录'
        }
    }
    if (!pageSize || !currentPage) {
        return {
            errorCode: 422,
            hitMesg: '参数类型错误'
        };
    };
    const data = [];
    for (let i = 0; i < pageSize; i++) {
        let uploadFileList = Mock.mock({
            'id|+1': 1,
            'createTime': Mock.Random.date(),
            'runStatus': Mock.Random.natural(0, 2)
        });
        data.push(uploadFileList);
    }
    console.log(data, 'data')
    return {
        data: {
            list: data,
            page: {
                page: currentPage,
                count: 100
            }
        },
        code: 0
    };
}
module.exports =  {
    getUpdataList,
    getDownloadList
}