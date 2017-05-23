import { StringUtils } from './string.utils';

import $ from 'jquery/dist/jquery';

// @ObjectUtils class
export class ObjectUtils {

  public static jsonToSerialize (target: any, sp: string, type: string) {
    let sSerial = '';
    $.each(target, function(k, v) {
      switch (type) {
        case 'k': // key만
          sSerial += (k + sp);
          break;
        case 'v': // value만
          sSerial += (v + sp);
          break;
        case 'kv': // key=value 로
          sSerial += ((k + '=' + v) + sp);
          break;
      }
    });
    return sSerial.substr(0, (sSerial.length - 1));
  }

  public static serializeToJson (target: any, k1: string, k2: string) {
    const json = {};
    if (StringUtils.isNotEmpty(target)) {
      if (target.indexOf(k1) > -1) {
        target = target.split(k1);
        for (let e of target) {
          if (e.indexOf(k2) > -1) {
            let ae = e.split(k2);
            json[ae[0]] = ae[1];
          }
        }
      } else {
        if (target.indexOf(k2) > -1) {
          let ae = target.split(k2);
          json[ae[0]] = ae[1];
        }
      }
    }
    return json;
  }

  public static compareJson (oriJson: any, targetJson: any) {
    // 비교 결과 JSON (다른 것 또는 oriJson에 없는 targetJson의 값이 들어감)
    let rJson = {};

    // oriJson과 값이 다른 targetJson값
    $.each(oriJson, function(k, v) {
      if (targetJson[k] !== undefined) {
        if (oriJson[k] !== targetJson[k]) {
          rJson[k] = targetJson[k];
        }
      }
    });

    // targetJson에만 있는거
    $.each(targetJson, function(k, v) {
      if (oriJson[k] === undefined) {
        rJson[k] = v;
      }
    });

    return rJson;
  }

  public static compareArray (arr1: Array<any>, arr2: Array<any>) {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    return (JSON.stringify(arr1) === JSON.stringify(arr2));
  }

  public static getDocumentInfo (key?: string) {
    let doc = document;
    let loc = doc.location;
    let info = {
      href : loc.href,
      host : loc.host,
      hash : loc.hash,
      hostname : loc.hostname,
      pathname : loc.pathname,
      port : loc.port,
      origin : loc.origin,
      protocol : (loc.protocol.indexOf(':') > -1) ? loc.protocol.replace(':', '') : loc.protocol,
      querystring : (loc.search.indexOf('?') > -1) ? loc.search.replace('?', '') : loc.search,
      title : encodeURIComponent(doc.title)
    };
    info['querystringJSON'] = this.serializeToJson(info.querystring, '&', '=');

    if (key !== undefined) {
      return info[key];
    }
    return info;
  }

}
