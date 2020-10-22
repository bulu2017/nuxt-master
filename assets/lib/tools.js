import md5 from 'js-md5';

/**
 * 判断对象是否为空
 * @param {Object}} val 
 */
export function IsEmpty(val) {
    if (val === null || val === undefined) {
        return true;
    } else {
        if (typeof val === 'string') {
            if (val == "" || val == "null" || val == 'undefined') {
                return true;
            } else {
                return false;
            }
        } else if (typeof val === 'number') {
            if (isNaN(val)) {
                return true;
            } else {
                return false;
            }
        } else if (typeof val === 'object') {
            if ((Array.isArray(val) && val.length === 0) || (Object.prototype.isPrototypeOf(val) && Object.keys(val).length === 0)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

/**
 * 判断是否为空，为空返回指定默认值
 * @param {Object} val 校验对象
 * @param {Object} rtVal 默认值
 */
export function EmptyDefault(val, rtVal) {
    // console.log(typeof val)
    if (val === null || val === undefined) {
        return rtVal
    } else {
        if (typeof val === 'string') {
            if (val === '' || val === 'null' || val === 'undefined') {
                return rtVal
            } else {
                return val
            }
        } else if (typeof val === 'number') {
            if (isNaN(val)) {
                return rtVal
            } else {
                return val
            }
        } else if (typeof val === 'object') {
            if ((Array.isArray(val) && val.length === 0) || (Object.prototype.isPrototypeOf(val) && Object.keys(val).length === 0)) {
                return rtVal
            } else {
                return val
            }
        }
    }
}

/**
 * 版本比较
 * @param {String} _old_version 原始版本
 * @param {String} _version 要比较的版本编号
 */
export function CompareVersion(_old_version, _version) {
    const v1 = _old_version;
    const v2 = _version.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
        v1.push('0')
    }
    while (v2.length < len) {
        v2.push('0')
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i])
        const num2 = parseInt(v2[i])

        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0
}

/**
 * 手机号码有效性验证
 * @param {String} _mobile 待校验手机号码
 */
export function CheckMobile(_mobile) {
    if (IsEmpty(_mobile)) {
        return false
    }
    var reg = /^1[1-9][0-9]\d{8}$/g
    return reg.test(_mobile)
}

/**
 * 隐藏手机中间四位
 * @param {String}} _mobile 待隐藏的手机号码
 */
export function HideMobile(_mobile) {
    if (IsEmpty(_mobile)) {
        return _mobile
    }
    var reg = /^(\d{3})\d{4}(\d{4})$/g
    return _mobile.replace(reg, '$1****$2')
}

/**
 * 隐藏用户名
 * @param {String} _userName 用户姓名
 */
export function HideUserName(_userName) {
    if (IsEmpty(_userName)) {
        return _userName
    }
    var newStr
    if (_userName.length === 2) {
        newStr = _userName.substr(0, 1) + '*'
    } else if (_userName.length > 2) {
        var char = ''
        var _length = _userName.length > 4 ? 4 : _userName.length
        for (let i = 0, len = _length - 2; i < len; i++) {
            char += '*'
        }
        newStr = _userName.substr(0, 1) + char + _userName.substr(-1, 1)
    }
    return newStr
}

/**
 * 数字校验
 * @param {Number} _number 待校验数字
 */
export function CheckNumber(_number) {
    var a = /^(-?\d+)(\.\d+)?$/
    if (IsEmpty(_number)) {
        return false
    } else {
        if (a.test(_number)) {
            return true
        } else {
            return false
        }
    }
}

/**
 * 指定区间随机数
 * @param {*} _min 最小数字
 * @param {*} _max 最大数字
 */
export function GetRandomNum(_min, _max) {
    var Range = _max - _min
    var Rand = Math.random()
    return (_min + Math.round(Rand * Range))
}

/**
 * 随机字符串
 */
export function GetRandomStr() {
    var _timeStr = new Date().getTime()
    return md5(String(_timeStr)).toUpperCase()
}

/**
 * 校验字符串是否以指定字符串开头
 * @param {String} _content 待核验内容
 * @param {String} _prefix 前缀
 */
export function StartWith(_content, _prefix) {
    var reg = new RegExp('^' + _prefix)
    return reg.test(_content)
}

/**
 * 校验字符串是否以指定字符串结束
 * @param {String} _content 待核验内容
 * @param {String} _suffix 前缀
 */
export function EndWith(_content, _suffix) {
    var reg = new RegExp(_suffix + '$')
    return reg.test(_content)
}

/**
 * 数组数据分割
 * @param {Array} _data 数组
 * @param {Number} _num 每组数据条数
 */
export function ArrayDataSplitg(_data, _num) {
    var proportion = _num
    var num = 0
    var data = []
    for (var i = 0; i < _data.length; i++) {
        if (i % proportion === 0 && i !== 0) {
            data.push(_data.slice(num, i))
            num = i
        }
        if ((i + 1) === _data.length) {
            data.push(_data.slice(num, (i + 1)))
        }
    }
    return data
}

/**
 * 日期格式化
 * @param {Date} _date 日期
 * @param {String} _format 格式 'yyyy-MM-dd HH:mm:ss'
 */
export function DateFormat(_date, _format) {
    if (IsEmpty(_date)) {
        return _date
    }

    var _line = true
    var _point = true
    if (_date.indexOf('-') === -1) {
        _line = false
    } else if (_date.indexOf('.') === -1) {
        _point = false
    }
    _date = _date.replace(/\-/g, '/')
    _date = new Date(_date)
    _format = _format || 'yyyy-MM-dd hh:mm:ss'

    if (_date instanceof Date) {
        Date.prototype.Format = function(fmt) { // author: meizz
            var o = {
                'M+': this.getMonth() + 1, // 月份
                'd+': this.getDate(), // 日
                'h+': this.getHours(), // 小时
                'm+': this.getMinutes(), // 分
                's+': this.getSeconds(), // 秒
                'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
                'S': this.getMilliseconds() // 毫秒
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
            }
            return fmt
        }
        if (_line) {
            return _date.Format(_format).replace(/\//g, '-').replace(/\./g, '-')
        } else if (_point) {
            return _date.Format(_format).replace(/\//g, '.')
        }
        return _date.Format(_format)
    }
    return _date
}

/**
 * 字符串校验
 * @param {String} _str 待校验对象
 */
export function IsString(_str) {
    return Object.prototype.toString.call(_str) === '[object String]'
}

/**
 * 判断字符串是否为有效的JSON格式
 * @param {String} _jsonStr json字符串
 */
export function IsJSON(_jsonStr) {
    if (!IsString(_jsonStr)) return false
        // 替换回车符、换行符、空格等特殊标记
    _jsonStr = _jsonStr.replace(/\s/g, '').replace(/\n|\r/, '')
        //
    if (/^\{(.*?)\}$/.test(_jsonStr)) {
        return /"(.*?)":(.*?)/g.test(_jsonStr)
    }
    if (/^\[(.*?)\]$/.test(_jsonStr)) {
        return _jsonStr.replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/},{/g, '}\n{')
            .split(/\n/)
            .map(function(s) {
                return IsJSON(s)
            })
            .reduce(function(prev, curr) {
                return !!curr
            })
    }
    return false
}

/**
 * 获取请求地址传回来的参数名称
 * @param {String} url 请求URL
 * @param {String} name 参数名称
 */
export function GetQueryString(url, name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = url.substr((url.indexOf('?') + 1)).match(reg)

    if (r != null) return unescape(r[2])
    return null
}

/**
 * 校验打开文档文件是否符合要求
 * @param {String} fileName 网络文件
 */
export function CheckOpenDocument(fileName) {
    // var reg = /(?:doc|docx|xls|xlsx|ppt|pptx|pdf)$/
    var reg = /^https?:\/\/.*?(?:doc|docx|xls|xlsx|ppt|pptx|pdf)$/i
    if (reg.test(fileName)) {
        return true
    }
    return false
}

/**
 * 校验是否为图片文件
 * @param {String} fileName 网络文件
 */
export function checkImage(fileName) {
    var reg = /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i
    if (reg.test(fileName)) {
        return true
    }
    return false
}

/**
 * 获取后缀名
 * @param {String} fileName 网络文件 
 */
export function GetSuffix(fileName) {
    return fileName.split('.').pop().toLowerCase();
}

/**
 * 获取文件名称及后缀
 * @param {String} url 网络URL地址
 */
export function GetUrlFileName(url) {
    return url.match(/^.+\/(\w+\.\w+)/i)
}

/**
 * 字符串按固定长度转数字
 * @param {String} value 待转换字符串
 * @param {int} _num 指定长度
 */
export function StringToArray(value, _num) {
    if (IsEmpty(value)) {
        return new Array();
    }

    var newArray = new Array();
    // 如果文字本身长度少于分割长度，则原数据组成数组后返回
    var _length = GetChineseLength(value);
    if (_length <= _num) {
        newArray.push(value);
        return newArray;
    }

    var _strArray = value.split('');
    var _arrayItem = '';
    var _arrayItemLength = 0.0;

    _strArray.forEach(function(_item, _index) {
        if (_arrayItemLength >= _num) {
            newArray.push(_arrayItem);
            _arrayItem = '';
            _arrayItemLength = 0;
        }
        _arrayItem += _item;
        if (_item.charCodeAt() < 0 || _item.charCodeAt() > 255) {
            _arrayItemLength += 1; // 汉字代表1
        } else {
            _arrayItemLength += 0.5; // 非汉族只占0.5
        }
    })


    return newArray;
}

/**
 * 获取字符串长度 中文占1个 其他符号占0.5
 * @param {String} value 字符串
 */
export function GetChineseLength(value) {
    var _strArray = value.split('');

    var _arrayItemLength = 0.0;
    _strArray.forEach(element => {
        if (element.charCodeAt() < 0 || element.charCodeAt() > 255) {
            _arrayItemLength += 1; // 汉字代表1
        } else {
            _arrayItemLength += 0.5; // 非汉族只占0.5
        }
    });
    return _arrayItemLength
}

/**
 * 数据加密 MD5
 * @param {object} value 待加密的对象
 */
export function Md5(value) {
    let _md5Str = '';
    if (IsEmpty(value)) {
        return '';
    }
    if (typeof value === 'object') {
        _md5Str = JSON.stringify(value)
    } else {
        _md5Str = value
    }
    return md5(String(_md5Str)).toUpperCase()
}