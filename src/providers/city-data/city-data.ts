import {Injectable} from '@angular/core';

/*
  Generated class for the CityDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityDataProvider {

  cities: any[];

  constructor() {
    this.cities = [
      {
        "options": [
          {
            "text": "北京市",
            "value": "110000"
          },
          {
            "text": "天津市",
            "value": "120000"
          },
          {
            "text": "河北省",
            "value": "130000"
          },
          {
            "text": "山西省",
            "value": "140000"
          },
          {
            "text": "内蒙古自治区",
            "value": "150000"
          },
          {
            "text": "辽宁省",
            "value": "210000"
          },
          {
            "text": "吉林省",
            "value": "220000"
          },
          {
            "text": "黑龙江省",
            "value": "230000"
          },
          {
            "text": "上海市",
            "value": "310000"
          },
          {
            "text": "江苏省",
            "value": "320000"
          },
          {
            "text": "浙江省",
            "value": "330000"
          },
          {
            "text": "安徽省",
            "value": "340000"
          },
          {
            "text": "福建省",
            "value": "350000"
          },
          {
            "text": "江西省",
            "value": "360000"
          },
          {
            "text": "山东省",
            "value": "370000"
          },
          {
            "text": "河南省",
            "value": "410000"
          },
          {
            "text": "湖北省",
            "value": "420000"
          },
          {
            "text": "湖南省",
            "value": "430000"
          },
          {
            "text": "广东省",
            "value": "440000"
          },
          {
            "text": "广西壮族自治区",
            "value": "450000"
          },
          {
            "text": "海南省",
            "value": "460000"
          },
          {
            "text": "重庆市",
            "value": "500000"
          },
          {
            "text": "四川省",
            "value": "510000"
          },
          {
            "text": "贵州省",
            "value": "520000"
          },
          {
            "text": "云南省",
            "value": "530000"
          },
          {
            "text": "西藏自治区",
            "value": "540000"
          },
          {
            "text": "陕西省",
            "value": "610000"
          },
          {
            "text": "甘肃省",
            "value": "620000"
          },
          {
            "text": "青海省",
            "value": "630000"
          },
          {
            "text": "宁夏回族自治区",
            "value": "640000"
          },
          {
            "text": "新疆维吾尔自治区",
            "value": "650000"
          },
          {
            "text": "台湾省",
            "value": "710000"
          },
          {
            "text": "香港特别行政区",
            "value": "810000"
          },
          {
            "text": "澳门特别行政区",
            "value": "820000"
          }
        ]
      },
      {
        "options": [
          {
            "text": "市辖区",
            "value": "810100",
            "parentVal": "810000"
          },
          {
            "text": "澳门半岛",
            "value": "820100",
            "parentVal": "820000"
          },
          {
            "text": "离岛",
            "value": "820200",
            "parentVal": "820000"
          },
          {
            "text": "其他",
            "value": "820300",
            "parentVal": "820000"
          },
          {
            "text": "其他",
            "value": "710100",
            "parentVal": "710000"
          },
          {
            "text": "市辖区",
            "value": "110100",
            "parentVal": "110000"
          },
          {
            "text": "市辖县",
            "value": "110200",
            "parentVal": "110000"
          },
          {
            "text": "市辖区",
            "value": "120100",
            "parentVal": "120000"
          },
          {
            "text": "市辖县",
            "value": "120200",
            "parentVal": "120000"
          },
          {
            "text": "石家庄市",
            "value": "130100",
            "parentVal": "130000"
          },
          {
            "text": "唐山市",
            "value": "130200",
            "parentVal": "130000"
          },
          {
            "text": "秦皇岛市",
            "value": "130300",
            "parentVal": "130000"
          },
          {
            "text": "邯郸市",
            "value": "130400",
            "parentVal": "130000"
          },
          {
            "text": "邢台市",
            "value": "130500",
            "parentVal": "130000"
          },
          {
            "text": "保定市",
            "value": "130600",
            "parentVal": "130000"
          },
          {
            "text": "张家口市",
            "value": "130700",
            "parentVal": "130000"
          },
          {
            "text": "承德市",
            "value": "130800",
            "parentVal": "130000"
          },
          {
            "text": "沧州市",
            "value": "130900",
            "parentVal": "130000"
          },
          {
            "text": "廊坊市",
            "value": "131000",
            "parentVal": "130000"
          },
          {
            "text": "衡水市",
            "value": "131100",
            "parentVal": "130000"
          },
          {
            "text": "太原市",
            "value": "140100",
            "parentVal": "140000"
          },
          {
            "text": "大同市",
            "value": "140200",
            "parentVal": "140000"
          },
          {
            "text": "阳泉市",
            "value": "140300",
            "parentVal": "140000"
          },
          {
            "text": "长治市",
            "value": "140400",
            "parentVal": "140000"
          },
          {
            "text": "晋城市",
            "value": "140500",
            "parentVal": "140000"
          },
          {
            "text": "朔州市",
            "value": "140600",
            "parentVal": "140000"
          },
          {
            "text": "晋中市",
            "value": "140700",
            "parentVal": "140000"
          },
          {
            "text": "运城市",
            "value": "140800",
            "parentVal": "140000"
          },
          {
            "text": "忻州市",
            "value": "140900",
            "parentVal": "140000"
          },
          {
            "text": "临汾市",
            "value": "141000",
            "parentVal": "140000"
          },
          {
            "text": "吕梁市",
            "value": "141100",
            "parentVal": "140000"
          },
          {
            "text": "呼和浩特市",
            "value": "150100",
            "parentVal": "150000"
          },
          {
            "text": "包头市",
            "value": "150200",
            "parentVal": "150000"
          },
          {
            "text": "乌海市",
            "value": "150300",
            "parentVal": "150000"
          },
          {
            "text": "赤峰市",
            "value": "150400",
            "parentVal": "150000"
          },
          {
            "text": "通辽市",
            "value": "150500",
            "parentVal": "150000"
          },
          {
            "text": "鄂尔多斯市",
            "value": "150600",
            "parentVal": "150000"
          },
          {
            "text": "呼伦贝尔市",
            "value": "150700",
            "parentVal": "150000"
          },
          {
            "text": "巴彦淖尔市",
            "value": "150800",
            "parentVal": "150000"
          },
          {
            "text": "乌兰察布市",
            "value": "150900",
            "parentVal": "150000"
          },
          {
            "text": "兴安盟",
            "value": "152200",
            "parentVal": "150000"
          },
          {
            "text": "锡林郭勒盟",
            "value": "152500",
            "parentVal": "150000"
          },
          {
            "text": "阿拉善盟",
            "value": "152900",
            "parentVal": "150000"
          },
          {
            "text": "沈阳市",
            "value": "210100",
            "parentVal": "210000"
          },
          {
            "text": "大连市",
            "value": "210200",
            "parentVal": "210000"
          },
          {
            "text": "鞍山市",
            "value": "210300",
            "parentVal": "210000"
          },
          {
            "text": "抚顺市",
            "value": "210400",
            "parentVal": "210000"
          },
          {
            "text": "本溪市",
            "value": "210500",
            "parentVal": "210000"
          },
          {
            "text": "丹东市",
            "value": "210600",
            "parentVal": "210000"
          },
          {
            "text": "锦州市",
            "value": "210700",
            "parentVal": "210000"
          },
          {
            "text": "营口市",
            "value": "210800",
            "parentVal": "210000"
          },
          {
            "text": "阜新市",
            "value": "210900",
            "parentVal": "210000"
          },
          {
            "text": "辽阳市",
            "value": "211000",
            "parentVal": "210000"
          },
          {
            "text": "盘锦市",
            "value": "211100",
            "parentVal": "210000"
          },
          {
            "text": "铁岭市",
            "value": "211200",
            "parentVal": "210000"
          },
          {
            "text": "朝阳市",
            "value": "211300",
            "parentVal": "210000"
          },
          {
            "text": "葫芦岛市",
            "value": "211400",
            "parentVal": "210000"
          },
          {
            "text": "长春市",
            "value": "220100",
            "parentVal": "220000"
          },
          {
            "text": "吉林市",
            "value": "220200",
            "parentVal": "220000"
          },
          {
            "text": "四平市",
            "value": "220300",
            "parentVal": "220000"
          },
          {
            "text": "辽源市",
            "value": "220400",
            "parentVal": "220000"
          },
          {
            "text": "通化市",
            "value": "220500",
            "parentVal": "220000"
          },
          {
            "text": "白山市",
            "value": "220600",
            "parentVal": "220000"
          },
          {
            "text": "松原市",
            "value": "220700",
            "parentVal": "220000"
          },
          {
            "text": "白城市",
            "value": "220800",
            "parentVal": "220000"
          },
          {
            "text": "延边朝鲜族自治州",
            "value": "222400",
            "parentVal": "220000"
          },
          {
            "text": "哈尔滨市",
            "value": "230100",
            "parentVal": "230000"
          },
          {
            "text": "齐齐哈尔市",
            "value": "230200",
            "parentVal": "230000"
          },
          {
            "text": "鸡西市",
            "value": "230300",
            "parentVal": "230000"
          },
          {
            "text": "鹤岗市",
            "value": "230400",
            "parentVal": "230000"
          },
          {
            "text": "双鸭山市",
            "value": "230500",
            "parentVal": "230000"
          },
          {
            "text": "大庆市",
            "value": "230600",
            "parentVal": "230000"
          },
          {
            "text": "伊春市",
            "value": "230700",
            "parentVal": "230000"
          },
          {
            "text": "佳木斯市",
            "value": "230800",
            "parentVal": "230000"
          },
          {
            "text": "七台河市",
            "value": "230900",
            "parentVal": "230000"
          },
          {
            "text": "牡丹江市",
            "value": "231000",
            "parentVal": "230000"
          },
          {
            "text": "黑河市",
            "value": "231100",
            "parentVal": "230000"
          },
          {
            "text": "绥化市",
            "value": "231200",
            "parentVal": "230000"
          },
          {
            "text": "大兴安岭地区",
            "value": "232700",
            "parentVal": "230000"
          },
          {
            "text": "市辖区",
            "value": "310100",
            "parentVal": "310000"
          },
          {
            "text": "市辖县",
            "value": "310200",
            "parentVal": "310000"
          },
          {
            "text": "南京市",
            "value": "320100",
            "parentVal": "320000"
          },
          {
            "text": "无锡市",
            "value": "320200",
            "parentVal": "320000"
          },
          {
            "text": "徐州市",
            "value": "320300",
            "parentVal": "320000"
          },
          {
            "text": "常州市",
            "value": "320400",
            "parentVal": "320000"
          },
          {
            "text": "苏州市",
            "value": "320500",
            "parentVal": "320000"
          },
          {
            "text": "南通市",
            "value": "320600",
            "parentVal": "320000"
          },
          {
            "text": "连云港市",
            "value": "320700",
            "parentVal": "320000"
          },
          {
            "text": "淮安市",
            "value": "320800",
            "parentVal": "320000"
          },
          {
            "text": "盐城市",
            "value": "320900",
            "parentVal": "320000"
          },
          {
            "text": "扬州市",
            "value": "321000",
            "parentVal": "320000"
          },
          {
            "text": "镇江市",
            "value": "321100",
            "parentVal": "320000"
          },
          {
            "text": "泰州市",
            "value": "321200",
            "parentVal": "320000"
          },
          {
            "text": "宿迁市",
            "value": "321300",
            "parentVal": "320000"
          },
          {
            "text": "杭州市",
            "value": "330100",
            "parentVal": "330000"
          },
          {
            "text": "宁波市",
            "value": "330200",
            "parentVal": "330000"
          },
          {
            "text": "温州市",
            "value": "330300",
            "parentVal": "330000"
          },
          {
            "text": "嘉兴市",
            "value": "330400",
            "parentVal": "330000"
          },
          {
            "text": "湖州市",
            "value": "330500",
            "parentVal": "330000"
          },
          {
            "text": "绍兴市",
            "value": "330600",
            "parentVal": "330000"
          },
          {
            "text": "金华市",
            "value": "330700",
            "parentVal": "330000"
          },
          {
            "text": "衢州市",
            "value": "330800",
            "parentVal": "330000"
          },
          {
            "text": "舟山市",
            "value": "330900",
            "parentVal": "330000"
          },
          {
            "text": "台州市",
            "value": "331000",
            "parentVal": "330000"
          },
          {
            "text": "丽水市",
            "value": "331100",
            "parentVal": "330000"
          },
          {
            "text": "合肥市",
            "value": "340100",
            "parentVal": "340000"
          },
          {
            "text": "芜湖市",
            "value": "340200",
            "parentVal": "340000"
          },
          {
            "text": "蚌埠市",
            "value": "340300",
            "parentVal": "340000"
          },
          {
            "text": "淮南市",
            "value": "340400",
            "parentVal": "340000"
          },
          {
            "text": "马鞍山市",
            "value": "340500",
            "parentVal": "340000"
          },
          {
            "text": "淮北市",
            "value": "340600",
            "parentVal": "340000"
          },
          {
            "text": "铜陵市",
            "value": "340700",
            "parentVal": "340000"
          },
          {
            "text": "安庆市",
            "value": "340800",
            "parentVal": "340000"
          },
          {
            "text": "黄山市",
            "value": "341000",
            "parentVal": "340000"
          },
          {
            "text": "滁州市",
            "value": "341100",
            "parentVal": "340000"
          },
          {
            "text": "阜阳市",
            "value": "341200",
            "parentVal": "340000"
          },
          {
            "text": "宿州市",
            "value": "341300",
            "parentVal": "340000"
          },
          {
            "text": "六安市",
            "value": "341500",
            "parentVal": "340000"
          },
          {
            "text": "亳州市",
            "value": "341600",
            "parentVal": "340000"
          },
          {
            "text": "池州市",
            "value": "341700",
            "parentVal": "340000"
          },
          {
            "text": "宣城市",
            "value": "341800",
            "parentVal": "340000"
          },
          {
            "text": "福州市",
            "value": "350100",
            "parentVal": "350000"
          },
          {
            "text": "厦门市",
            "value": "350200",
            "parentVal": "350000"
          },
          {
            "text": "莆田市",
            "value": "350300",
            "parentVal": "350000"
          },
          {
            "text": "三明市",
            "value": "350400",
            "parentVal": "350000"
          },
          {
            "text": "泉州市",
            "value": "350500",
            "parentVal": "350000"
          },
          {
            "text": "漳州市",
            "value": "350600",
            "parentVal": "350000"
          },
          {
            "text": "南平市",
            "value": "350700",
            "parentVal": "350000"
          },
          {
            "text": "龙岩市",
            "value": "350800",
            "parentVal": "350000"
          },
          {
            "text": "宁德市",
            "value": "350900",
            "parentVal": "350000"
          },
          {
            "text": "南昌市",
            "value": "360100",
            "parentVal": "360000"
          },
          {
            "text": "景德镇市",
            "value": "360200",
            "parentVal": "360000"
          },
          {
            "text": "萍乡市",
            "value": "360300",
            "parentVal": "360000"
          },
          {
            "text": "九江市",
            "value": "360400",
            "parentVal": "360000"
          },
          {
            "text": "新余市",
            "value": "360500",
            "parentVal": "360000"
          },
          {
            "text": "鹰潭市",
            "value": "360600",
            "parentVal": "360000"
          },
          {
            "text": "赣州市",
            "value": "360700",
            "parentVal": "360000"
          },
          {
            "text": "吉安市",
            "value": "360800",
            "parentVal": "360000"
          },
          {
            "text": "宜春市",
            "value": "360900",
            "parentVal": "360000"
          },
          {
            "text": "抚州市",
            "value": "361000",
            "parentVal": "360000"
          },
          {
            "text": "上饶市",
            "value": "361100",
            "parentVal": "360000"
          },
          {
            "text": "济南市",
            "value": "370100",
            "parentVal": "370000"
          },
          {
            "text": "青岛市",
            "value": "370200",
            "parentVal": "370000"
          },
          {
            "text": "淄博市",
            "value": "370300",
            "parentVal": "370000"
          },
          {
            "text": "枣庄市",
            "value": "370400",
            "parentVal": "370000"
          },
          {
            "text": "东营市",
            "value": "370500",
            "parentVal": "370000"
          },
          {
            "text": "烟台市",
            "value": "370600",
            "parentVal": "370000"
          },
          {
            "text": "潍坊市",
            "value": "370700",
            "parentVal": "370000"
          },
          {
            "text": "济宁市",
            "value": "370800",
            "parentVal": "370000"
          },
          {
            "text": "泰安市",
            "value": "370900",
            "parentVal": "370000"
          },
          {
            "text": "威海市",
            "value": "371000",
            "parentVal": "370000"
          },
          {
            "text": "日照市",
            "value": "371100",
            "parentVal": "370000"
          },
          {
            "text": "莱芜市",
            "value": "371200",
            "parentVal": "370000"
          },
          {
            "text": "临沂市",
            "value": "371300",
            "parentVal": "370000"
          },
          {
            "text": "德州市",
            "value": "371400",
            "parentVal": "370000"
          },
          {
            "text": "聊城市",
            "value": "371500",
            "parentVal": "370000"
          },
          {
            "text": "滨州市",
            "value": "371600",
            "parentVal": "370000"
          },
          {
            "text": "菏泽市",
            "value": "371700",
            "parentVal": "370000"
          },
          {
            "text": "郑州市",
            "value": "410100",
            "parentVal": "410000"
          },
          {
            "text": "开封市",
            "value": "410200",
            "parentVal": "410000"
          },
          {
            "text": "洛阳市",
            "value": "410300",
            "parentVal": "410000"
          },
          {
            "text": "平顶山市",
            "value": "410400",
            "parentVal": "410000"
          },
          {
            "text": "安阳市",
            "value": "410500",
            "parentVal": "410000"
          },
          {
            "text": "鹤壁市",
            "value": "410600",
            "parentVal": "410000"
          },
          {
            "text": "新乡市",
            "value": "410700",
            "parentVal": "410000"
          },
          {
            "text": "焦作市",
            "value": "410800",
            "parentVal": "410000"
          },
          {
            "text": "濮阳市",
            "value": "410900",
            "parentVal": "410000"
          },
          {
            "text": "许昌市",
            "value": "411000",
            "parentVal": "410000"
          },
          {
            "text": "漯河市",
            "value": "411100",
            "parentVal": "410000"
          },
          {
            "text": "三门峡市",
            "value": "411200",
            "parentVal": "410000"
          },
          {
            "text": "南阳市",
            "value": "411300",
            "parentVal": "410000"
          },
          {
            "text": "商丘市",
            "value": "411400",
            "parentVal": "410000"
          },
          {
            "text": "信阳市",
            "value": "411500",
            "parentVal": "410000"
          },
          {
            "text": "周口市",
            "value": "411600",
            "parentVal": "410000"
          },
          {
            "text": "驻马店市",
            "value": "411700",
            "parentVal": "410000"
          },
          {
            "text": "省直辖行政区",
            "value": "419000",
            "parentVal": "410000"
          },
          {
            "text": "武汉市",
            "value": "420100",
            "parentVal": "420000"
          },
          {
            "text": "黄石市",
            "value": "420200",
            "parentVal": "420000"
          },
          {
            "text": "十堰市",
            "value": "420300",
            "parentVal": "420000"
          },
          {
            "text": "宜昌市",
            "value": "420500",
            "parentVal": "420000"
          },
          {
            "text": "襄阳市",
            "value": "420600",
            "parentVal": "420000"
          },
          {
            "text": "鄂州市",
            "value": "420700",
            "parentVal": "420000"
          },
          {
            "text": "荆门市",
            "value": "420800",
            "parentVal": "420000"
          },
          {
            "text": "孝感市",
            "value": "420900",
            "parentVal": "420000"
          },
          {
            "text": "荆州市",
            "value": "421000",
            "parentVal": "420000"
          },
          {
            "text": "黄冈市",
            "value": "421100",
            "parentVal": "420000"
          },
          {
            "text": "咸宁市",
            "value": "421200",
            "parentVal": "420000"
          },
          {
            "text": "随州市",
            "value": "421300",
            "parentVal": "420000"
          },
          {
            "text": "恩施土家族苗族自治州",
            "value": "422800",
            "parentVal": "420000"
          },
          {
            "text": "省直辖行政区",
            "value": "429000",
            "parentVal": "420000"
          },
          {
            "text": "长沙市",
            "value": "430100",
            "parentVal": "430000"
          },
          {
            "text": "株洲市",
            "value": "430200",
            "parentVal": "430000"
          },
          {
            "text": "湘潭市",
            "value": "430300",
            "parentVal": "430000"
          },
          {
            "text": "衡阳市",
            "value": "430400",
            "parentVal": "430000"
          },
          {
            "text": "邵阳市",
            "value": "430500",
            "parentVal": "430000"
          },
          {
            "text": "岳阳市",
            "value": "430600",
            "parentVal": "430000"
          },
          {
            "text": "常德市",
            "value": "430700",
            "parentVal": "430000"
          },
          {
            "text": "张家界市",
            "value": "430800",
            "parentVal": "430000"
          },
          {
            "text": "益阳市",
            "value": "430900",
            "parentVal": "430000"
          },
          {
            "text": "郴州市",
            "value": "431000",
            "parentVal": "430000"
          },
          {
            "text": "永州市",
            "value": "431100",
            "parentVal": "430000"
          },
          {
            "text": "怀化市",
            "value": "431200",
            "parentVal": "430000"
          },
          {
            "text": "娄底市",
            "value": "431300",
            "parentVal": "430000"
          },
          {
            "text": "湘西土家族苗族自治州",
            "value": "433100",
            "parentVal": "430000"
          },
          {
            "text": "广州市",
            "value": "440100",
            "parentVal": "440000"
          },
          {
            "text": "韶关市",
            "value": "440200",
            "parentVal": "440000"
          },
          {
            "text": "深圳市",
            "value": "440300",
            "parentVal": "440000"
          },
          {
            "text": "珠海市",
            "value": "440400",
            "parentVal": "440000"
          },
          {
            "text": "汕头市",
            "value": "440500",
            "parentVal": "440000"
          },
          {
            "text": "佛山市",
            "value": "440600",
            "parentVal": "440000"
          },
          {
            "text": "江门市",
            "value": "440700",
            "parentVal": "440000"
          },
          {
            "text": "湛江市",
            "value": "440800",
            "parentVal": "440000"
          },
          {
            "text": "茂名市",
            "value": "440900",
            "parentVal": "440000"
          },
          {
            "text": "肇庆市",
            "value": "441200",
            "parentVal": "440000"
          },
          {
            "text": "惠州市",
            "value": "441300",
            "parentVal": "440000"
          },
          {
            "text": "梅州市",
            "value": "441400",
            "parentVal": "440000"
          },
          {
            "text": "汕尾市",
            "value": "441500",
            "parentVal": "440000"
          },
          {
            "text": "河源市",
            "value": "441600",
            "parentVal": "440000"
          },
          {
            "text": "阳江市",
            "value": "441700",
            "parentVal": "440000"
          },
          {
            "text": "清远市",
            "value": "441800",
            "parentVal": "440000"
          },
          {
            "text": "东莞市",
            "value": "441900",
            "parentVal": "440000"
          },
          {
            "text": "中山市",
            "value": "442000",
            "parentVal": "440000"
          },
          {
            "text": "潮州市",
            "value": "445100",
            "parentVal": "440000"
          },
          {
            "text": "揭阳市",
            "value": "445200",
            "parentVal": "440000"
          },
          {
            "text": "云浮市",
            "value": "445300",
            "parentVal": "440000"
          },
          {
            "text": "南宁市",
            "value": "450100",
            "parentVal": "450000"
          },
          {
            "text": "柳州市",
            "value": "450200",
            "parentVal": "450000"
          },
          {
            "text": "桂林市",
            "value": "450300",
            "parentVal": "450000"
          },
          {
            "text": "梧州市",
            "value": "450400",
            "parentVal": "450000"
          },
          {
            "text": "北海市",
            "value": "450500",
            "parentVal": "450000"
          },
          {
            "text": "防城港市",
            "value": "450600",
            "parentVal": "450000"
          },
          {
            "text": "钦州市",
            "value": "450700",
            "parentVal": "450000"
          },
          {
            "text": "贵港市",
            "value": "450800",
            "parentVal": "450000"
          },
          {
            "text": "玉林市",
            "value": "450900",
            "parentVal": "450000"
          },
          {
            "text": "百色市",
            "value": "451000",
            "parentVal": "450000"
          },
          {
            "text": "贺州市",
            "value": "451100",
            "parentVal": "450000"
          },
          {
            "text": "河池市",
            "value": "451200",
            "parentVal": "450000"
          },
          {
            "text": "来宾市",
            "value": "451300",
            "parentVal": "450000"
          },
          {
            "text": "崇左市",
            "value": "451400",
            "parentVal": "450000"
          },
          {
            "text": "海口市",
            "value": "460100",
            "parentVal": "460000"
          },
          {
            "text": "三亚市",
            "value": "460200",
            "parentVal": "460000"
          },
          {
            "text": "三沙市",
            "value": "460300",
            "parentVal": "460000"
          },
          {
            "text": "省直辖行政区",
            "value": "469000",
            "parentVal": "460000"
          },
          {
            "text": "市辖区",
            "value": "500100",
            "parentVal": "500000"
          },
          {
            "text": "市辖县",
            "value": "500200",
            "parentVal": "500000"
          },
          {
            "text": "成都市",
            "value": "510100",
            "parentVal": "510000"
          },
          {
            "text": "自贡市",
            "value": "510300",
            "parentVal": "510000"
          },
          {
            "text": "攀枝花市",
            "value": "510400",
            "parentVal": "510000"
          },
          {
            "text": "泸州市",
            "value": "510500",
            "parentVal": "510000"
          },
          {
            "text": "德阳市",
            "value": "510600",
            "parentVal": "510000"
          },
          {
            "text": "绵阳市",
            "value": "510700",
            "parentVal": "510000"
          },
          {
            "text": "广元市",
            "value": "510800",
            "parentVal": "510000"
          },
          {
            "text": "遂宁市",
            "value": "510900",
            "parentVal": "510000"
          },
          {
            "text": "内江市",
            "value": "511000",
            "parentVal": "510000"
          },
          {
            "text": "乐山市",
            "value": "511100",
            "parentVal": "510000"
          },
          {
            "text": "南充市",
            "value": "511300",
            "parentVal": "510000"
          },
          {
            "text": "眉山市",
            "value": "511400",
            "parentVal": "510000"
          },
          {
            "text": "宜宾市",
            "value": "511500",
            "parentVal": "510000"
          },
          {
            "text": "广安市",
            "value": "511600",
            "parentVal": "510000"
          },
          {
            "text": "达州市",
            "value": "511700",
            "parentVal": "510000"
          },
          {
            "text": "雅安市",
            "value": "511800",
            "parentVal": "510000"
          },
          {
            "text": "巴中市",
            "value": "511900",
            "parentVal": "510000"
          },
          {
            "text": "资阳市",
            "value": "512000",
            "parentVal": "510000"
          },
          {
            "text": "阿坝藏族羌族自治州",
            "value": "513200",
            "parentVal": "510000"
          },
          {
            "text": "甘孜藏族自治州",
            "value": "513300",
            "parentVal": "510000"
          },
          {
            "text": "凉山彝族自治州",
            "value": "513400",
            "parentVal": "510000"
          },
          {
            "text": "贵阳市",
            "value": "520100",
            "parentVal": "520000"
          },
          {
            "text": "六盘水市",
            "value": "520200",
            "parentVal": "520000"
          },
          {
            "text": "遵义市",
            "value": "520300",
            "parentVal": "520000"
          },
          {
            "text": "安顺市",
            "value": "520400",
            "parentVal": "520000"
          },
          {
            "text": "毕节市",
            "value": "520500",
            "parentVal": "520000"
          },
          {
            "text": "铜仁市",
            "value": "520600",
            "parentVal": "520000"
          },
          {
            "text": "黔西南布依族苗族自治州",
            "value": "522300",
            "parentVal": "520000"
          },
          {
            "text": "黔东南苗族侗族自治州",
            "value": "522600",
            "parentVal": "520000"
          },
          {
            "text": "黔南布依族苗族自治州",
            "value": "522700",
            "parentVal": "520000"
          },
          {
            "text": "昆明市",
            "value": "530100",
            "parentVal": "530000"
          },
          {
            "text": "曲靖市",
            "value": "530300",
            "parentVal": "530000"
          },
          {
            "text": "玉溪市",
            "value": "530400",
            "parentVal": "530000"
          },
          {
            "text": "保山市",
            "value": "530500",
            "parentVal": "530000"
          },
          {
            "text": "昭通市",
            "value": "530600",
            "parentVal": "530000"
          },
          {
            "text": "丽江市",
            "value": "530700",
            "parentVal": "530000"
          },
          {
            "text": "普洱市",
            "value": "530800",
            "parentVal": "530000"
          },
          {
            "text": "临沧市",
            "value": "530900",
            "parentVal": "530000"
          },
          {
            "text": "楚雄彝族自治州",
            "value": "532300",
            "parentVal": "530000"
          },
          {
            "text": "红河哈尼族彝族自治州",
            "value": "532500",
            "parentVal": "530000"
          },
          {
            "text": "文山壮族苗族自治州",
            "value": "532600",
            "parentVal": "530000"
          },
          {
            "text": "西双版纳傣族自治州",
            "value": "532800",
            "parentVal": "530000"
          },
          {
            "text": "大理白族自治州",
            "value": "532900",
            "parentVal": "530000"
          },
          {
            "text": "德宏傣族景颇族自治州",
            "value": "533100",
            "parentVal": "530000"
          },
          {
            "text": "怒江傈僳族自治州",
            "value": "533300",
            "parentVal": "530000"
          },
          {
            "text": "迪庆藏族自治州",
            "value": "533400",
            "parentVal": "530000"
          },
          {
            "text": "拉萨市",
            "value": "540100",
            "parentVal": "540000"
          },
          {
            "text": "昌都地区",
            "value": "542100",
            "parentVal": "540000"
          },
          {
            "text": "山南地区",
            "value": "542200",
            "parentVal": "540000"
          },
          {
            "text": "日喀则地区",
            "value": "542300",
            "parentVal": "540000"
          },
          {
            "text": "那曲地区",
            "value": "542400",
            "parentVal": "540000"
          },
          {
            "text": "阿里地区",
            "value": "542500",
            "parentVal": "540000"
          },
          {
            "text": "林芝地区",
            "value": "542600",
            "parentVal": "540000"
          },
          {
            "text": "西安市",
            "value": "610100",
            "parentVal": "610000"
          },
          {
            "text": "铜川市",
            "value": "610200",
            "parentVal": "610000"
          },
          {
            "text": "宝鸡市",
            "value": "610300",
            "parentVal": "610000"
          },
          {
            "text": "咸阳市",
            "value": "610400",
            "parentVal": "610000"
          },
          {
            "text": "渭南市",
            "value": "610500",
            "parentVal": "610000"
          },
          {
            "text": "延安市",
            "value": "610600",
            "parentVal": "610000"
          },
          {
            "text": "汉中市",
            "value": "610700",
            "parentVal": "610000"
          },
          {
            "text": "榆林市",
            "value": "610800",
            "parentVal": "610000"
          },
          {
            "text": "安康市",
            "value": "610900",
            "parentVal": "610000"
          },
          {
            "text": "商洛市",
            "value": "611000",
            "parentVal": "610000"
          },
          {
            "text": "兰州市",
            "value": "620100",
            "parentVal": "620000"
          },
          {
            "text": "嘉峪关市",
            "value": "620200",
            "parentVal": "620000"
          },
          {
            "text": "金昌市",
            "value": "620300",
            "parentVal": "620000"
          },
          {
            "text": "白银市",
            "value": "620400",
            "parentVal": "620000"
          },
          {
            "text": "天水市",
            "value": "620500",
            "parentVal": "620000"
          },
          {
            "text": "武威市",
            "value": "620600",
            "parentVal": "620000"
          },
          {
            "text": "张掖市",
            "value": "620700",
            "parentVal": "620000"
          },
          {
            "text": "平凉市",
            "value": "620800",
            "parentVal": "620000"
          },
          {
            "text": "酒泉市",
            "value": "620900",
            "parentVal": "620000"
          },
          {
            "text": "庆阳市",
            "value": "621000",
            "parentVal": "620000"
          },
          {
            "text": "定西市",
            "value": "621100",
            "parentVal": "620000"
          },
          {
            "text": "陇南市",
            "value": "621200",
            "parentVal": "620000"
          },
          {
            "text": "临夏回族自治州",
            "value": "622900",
            "parentVal": "620000"
          },
          {
            "text": "甘南藏族自治州",
            "value": "623000",
            "parentVal": "620000"
          },
          {
            "text": "西宁市",
            "value": "630100",
            "parentVal": "630000"
          },
          {
            "text": "海东市",
            "value": "630200",
            "parentVal": "630000"
          },
          {
            "text": "海北藏族自治州",
            "value": "632200",
            "parentVal": "630000"
          },
          {
            "text": "黄南藏族自治州",
            "value": "632300",
            "parentVal": "630000"
          },
          {
            "text": "海南藏族自治州",
            "value": "632500",
            "parentVal": "630000"
          },
          {
            "text": "果洛藏族自治州",
            "value": "632600",
            "parentVal": "630000"
          },
          {
            "text": "玉树藏族自治州",
            "value": "632700",
            "parentVal": "630000"
          },
          {
            "text": "海西蒙古族藏族自治州",
            "value": "632800",
            "parentVal": "630000"
          },
          {
            "text": "银川市",
            "value": "640100",
            "parentVal": "640000"
          },
          {
            "text": "石嘴山市",
            "value": "640200",
            "parentVal": "640000"
          },
          {
            "text": "吴忠市",
            "value": "640300",
            "parentVal": "640000"
          },
          {
            "text": "固原市",
            "value": "640400",
            "parentVal": "640000"
          },
          {
            "text": "中卫市",
            "value": "640500",
            "parentVal": "640000"
          },
          {
            "text": "乌鲁木齐市",
            "value": "650100",
            "parentVal": "650000"
          },
          {
            "text": "克拉玛依市",
            "value": "650200",
            "parentVal": "650000"
          },
          {
            "text": "吐鲁番地区",
            "value": "652100",
            "parentVal": "650000"
          },
          {
            "text": "哈密地区",
            "value": "652200",
            "parentVal": "650000"
          },
          {
            "text": "昌吉回族自治州",
            "value": "652300",
            "parentVal": "650000"
          },
          {
            "text": "博尔塔拉蒙古自治州",
            "value": "652700",
            "parentVal": "650000"
          },
          {
            "text": "巴音郭楞蒙古自治州",
            "value": "652800",
            "parentVal": "650000"
          },
          {
            "text": "阿克苏地区",
            "value": "652900",
            "parentVal": "650000"
          },
          {
            "text": "克孜勒苏柯尔克孜自治州",
            "value": "653000",
            "parentVal": "650000"
          },
          {
            "text": "喀什地区",
            "value": "653100",
            "parentVal": "650000"
          },
          {
            "text": "和田地区",
            "value": "653200",
            "parentVal": "650000"
          },
          {
            "text": "伊犁哈萨克自治州",
            "value": "654000",
            "parentVal": "650000"
          },
          {
            "text": "塔城地区",
            "value": "654200",
            "parentVal": "650000"
          },
          {
            "text": "阿勒泰地区",
            "value": "654300",
            "parentVal": "650000"
          },
          {
            "text": "自治区直辖县级行政区划",
            "value": "659000",
            "parentVal": "650000"
          }
        ]
      },
      {
        "options": [
          {
            "text": "东城区",
            "value": "110101",
            "parentVal": "110100"
          },
          {
            "text": "西城区",
            "value": "110102",
            "parentVal": "110100"
          },
          {
            "text": "朝阳区",
            "value": "110105",
            "parentVal": "110100"
          },
          {
            "text": "丰台区",
            "value": "110106",
            "parentVal": "110100"
          },
          {
            "text": "石景山区",
            "value": "110107",
            "parentVal": "110100"
          },
          {
            "text": "海淀区",
            "value": "110108",
            "parentVal": "110100"
          },
          {
            "text": "门头沟区",
            "value": "110109",
            "parentVal": "110100"
          },
          {
            "text": "房山区",
            "value": "110111",
            "parentVal": "110100"
          },
          {
            "text": "通州区",
            "value": "110112",
            "parentVal": "110100"
          },
          {
            "text": "顺义区",
            "value": "110113",
            "parentVal": "110100"
          },
          {
            "text": "昌平区",
            "value": "110114",
            "parentVal": "110100"
          },
          {
            "text": "大兴区",
            "value": "110115",
            "parentVal": "110100"
          },
          {
            "text": "怀柔区",
            "value": "110116",
            "parentVal": "110100"
          },
          {
            "text": "平谷区",
            "value": "110117",
            "parentVal": "110100"
          },
          {
            "text": "密云县",
            "value": "110228",
            "parentVal": "110200"
          },
          {
            "text": "延庆县",
            "value": "110229",
            "parentVal": "110200"
          },
          {
            "text": "和平区",
            "value": "120101",
            "parentVal": "120100"
          },
          {
            "text": "河东区",
            "value": "120102",
            "parentVal": "120100"
          },
          {
            "text": "河西区",
            "value": "120103",
            "parentVal": "120100"
          },
          {
            "text": "南开区",
            "value": "120104",
            "parentVal": "120100"
          },
          {
            "text": "河北区",
            "value": "120105",
            "parentVal": "120100"
          },
          {
            "text": "红桥区",
            "value": "120106",
            "parentVal": "120100"
          },
          {
            "text": "东丽区",
            "value": "120110",
            "parentVal": "120100"
          },
          {
            "text": "西青区",
            "value": "120111",
            "parentVal": "120100"
          },
          {
            "text": "津南区",
            "value": "120112",
            "parentVal": "120100"
          },
          {
            "text": "北辰区",
            "value": "120113",
            "parentVal": "120100"
          },
          {
            "text": "武清区",
            "value": "120114",
            "parentVal": "120100"
          },
          {
            "text": "宝坻区",
            "value": "120115",
            "parentVal": "120100"
          },
          {
            "text": "滨海新区",
            "value": "120116",
            "parentVal": "120100"
          },
          {
            "text": "宁河县",
            "value": "120221",
            "parentVal": "120200"
          },
          {
            "text": "静海县",
            "value": "120223",
            "parentVal": "120200"
          },
          {
            "text": "蓟县",
            "value": "120225",
            "parentVal": "120200"
          },
          {
            "text": "市辖区",
            "value": "130101",
            "parentVal": "130100"
          },
          {
            "text": "长安区",
            "value": "130102",
            "parentVal": "130100"
          },
          {
            "text": "桥东区",
            "value": "130103",
            "parentVal": "130100"
          },
          {
            "text": "桥西区",
            "value": "130104",
            "parentVal": "130100"
          },
          {
            "text": "新华区",
            "value": "130105",
            "parentVal": "130100"
          },
          {
            "text": "井陉矿区",
            "value": "130107",
            "parentVal": "130100"
          },
          {
            "text": "裕华区",
            "value": "130108",
            "parentVal": "130100"
          },
          {
            "text": "井陉县",
            "value": "130121",
            "parentVal": "130100"
          },
          {
            "text": "正定县",
            "value": "130123",
            "parentVal": "130100"
          },
          {
            "text": "栾城县",
            "value": "130124",
            "parentVal": "130100"
          },
          {
            "text": "行唐县",
            "value": "130125",
            "parentVal": "130100"
          },
          {
            "text": "灵寿县",
            "value": "130126",
            "parentVal": "130100"
          },
          {
            "text": "高邑县",
            "value": "130127",
            "parentVal": "130100"
          },
          {
            "text": "深泽县",
            "value": "130128",
            "parentVal": "130100"
          },
          {
            "text": "赞皇县",
            "value": "130129",
            "parentVal": "130100"
          },
          {
            "text": "无极县",
            "value": "130130",
            "parentVal": "130100"
          },
          {
            "text": "平山县",
            "value": "130131",
            "parentVal": "130100"
          },
          {
            "text": "元氏县",
            "value": "130132",
            "parentVal": "130100"
          },
          {
            "text": "赵县",
            "value": "130133",
            "parentVal": "130100"
          },
          {
            "text": "辛集市",
            "value": "130181",
            "parentVal": "130100"
          },
          {
            "text": "藁城市",
            "value": "130182",
            "parentVal": "130100"
          },
          {
            "text": "晋州市",
            "value": "130183",
            "parentVal": "130100"
          },
          {
            "text": "新乐市",
            "value": "130184",
            "parentVal": "130100"
          },
          {
            "text": "鹿泉市",
            "value": "130185",
            "parentVal": "130100"
          },
          {
            "text": "市辖区",
            "value": "130201",
            "parentVal": "130200"
          },
          {
            "text": "路南区",
            "value": "130202",
            "parentVal": "130200"
          },
          {
            "text": "路北区",
            "value": "130203",
            "parentVal": "130200"
          },
          {
            "text": "古冶区",
            "value": "130204",
            "parentVal": "130200"
          },
          {
            "text": "开平区",
            "value": "130205",
            "parentVal": "130200"
          },
          {
            "text": "丰南区",
            "value": "130207",
            "parentVal": "130200"
          },
          {
            "text": "丰润区",
            "value": "130208",
            "parentVal": "130200"
          },
          {
            "text": "曹妃甸区",
            "value": "130209",
            "parentVal": "130200"
          },
          {
            "text": "滦县",
            "value": "130223",
            "parentVal": "130200"
          },
          {
            "text": "滦南县",
            "value": "130224",
            "parentVal": "130200"
          },
          {
            "text": "乐亭县",
            "value": "130225",
            "parentVal": "130200"
          },
          {
            "text": "迁西县",
            "value": "130227",
            "parentVal": "130200"
          },
          {
            "text": "玉田县",
            "value": "130229",
            "parentVal": "130200"
          },
          {
            "text": "遵化市",
            "value": "130281",
            "parentVal": "130200"
          },
          {
            "text": "迁安市",
            "value": "130283",
            "parentVal": "130200"
          },
          {
            "text": "市辖区",
            "value": "130301",
            "parentVal": "130300"
          },
          {
            "text": "海港区",
            "value": "130302",
            "parentVal": "130300"
          },
          {
            "text": "山海关区",
            "value": "130303",
            "parentVal": "130300"
          },
          {
            "text": "北戴河区",
            "value": "130304",
            "parentVal": "130300"
          },
          {
            "text": "青龙满族自治县",
            "value": "130321",
            "parentVal": "130300"
          },
          {
            "text": "昌黎县",
            "value": "130322",
            "parentVal": "130300"
          },
          {
            "text": "抚宁县",
            "value": "130323",
            "parentVal": "130300"
          },
          {
            "text": "卢龙县",
            "value": "130324",
            "parentVal": "130300"
          },
          {
            "text": "市辖区",
            "value": "130401",
            "parentVal": "130400"
          },
          {
            "text": "邯山区",
            "value": "130402",
            "parentVal": "130400"
          },
          {
            "text": "丛台区",
            "value": "130403",
            "parentVal": "130400"
          },
          {
            "text": "复兴区",
            "value": "130404",
            "parentVal": "130400"
          },
          {
            "text": "峰峰矿区",
            "value": "130406",
            "parentVal": "130400"
          },
          {
            "text": "邯郸县",
            "value": "130421",
            "parentVal": "130400"
          },
          {
            "text": "临漳县",
            "value": "130423",
            "parentVal": "130400"
          },
          {
            "text": "成安县",
            "value": "130424",
            "parentVal": "130400"
          },
          {
            "text": "大名县",
            "value": "130425",
            "parentVal": "130400"
          },
          {
            "text": "涉县",
            "value": "130426",
            "parentVal": "130400"
          },
          {
            "text": "磁县",
            "value": "130427",
            "parentVal": "130400"
          },
          {
            "text": "肥乡县",
            "value": "130428",
            "parentVal": "130400"
          },
          {
            "text": "永年县",
            "value": "130429",
            "parentVal": "130400"
          },
          {
            "text": "邱县",
            "value": "130430",
            "parentVal": "130400"
          },
          {
            "text": "鸡泽县",
            "value": "130431",
            "parentVal": "130400"
          },
          {
            "text": "广平县",
            "value": "130432",
            "parentVal": "130400"
          },
          {
            "text": "馆陶县",
            "value": "130433",
            "parentVal": "130400"
          },
          {
            "text": "魏县",
            "value": "130434",
            "parentVal": "130400"
          },
          {
            "text": "曲周县",
            "value": "130435",
            "parentVal": "130400"
          },
          {
            "text": "武安市",
            "value": "130481",
            "parentVal": "130400"
          },
          {
            "text": "市辖区",
            "value": "130501",
            "parentVal": "130500"
          },
          {
            "text": "桥东区",
            "value": "130502",
            "parentVal": "130500"
          },
          {
            "text": "桥西区",
            "value": "130503",
            "parentVal": "130500"
          },
          {
            "text": "邢台县",
            "value": "130521",
            "parentVal": "130500"
          },
          {
            "text": "临城县",
            "value": "130522",
            "parentVal": "130500"
          },
          {
            "text": "内丘县",
            "value": "130523",
            "parentVal": "130500"
          },
          {
            "text": "柏乡县",
            "value": "130524",
            "parentVal": "130500"
          },
          {
            "text": "隆尧县",
            "value": "130525",
            "parentVal": "130500"
          },
          {
            "text": "任县",
            "value": "130526",
            "parentVal": "130500"
          },
          {
            "text": "南和县",
            "value": "130527",
            "parentVal": "130500"
          },
          {
            "text": "宁晋县",
            "value": "130528",
            "parentVal": "130500"
          },
          {
            "text": "巨鹿县",
            "value": "130529",
            "parentVal": "130500"
          },
          {
            "text": "新河县",
            "value": "130530",
            "parentVal": "130500"
          },
          {
            "text": "广宗县",
            "value": "130531",
            "parentVal": "130500"
          },
          {
            "text": "平乡县",
            "value": "130532",
            "parentVal": "130500"
          },
          {
            "text": "威县",
            "value": "130533",
            "parentVal": "130500"
          },
          {
            "text": "清河县",
            "value": "130534",
            "parentVal": "130500"
          },
          {
            "text": "临西县",
            "value": "130535",
            "parentVal": "130500"
          },
          {
            "text": "南宫市",
            "value": "130581",
            "parentVal": "130500"
          },
          {
            "text": "沙河市",
            "value": "130582",
            "parentVal": "130500"
          },
          {
            "text": "市辖区",
            "value": "130601",
            "parentVal": "130600"
          },
          {
            "text": "新市区",
            "value": "130602",
            "parentVal": "130600"
          },
          {
            "text": "北市区",
            "value": "130603",
            "parentVal": "130600"
          },
          {
            "text": "南市区",
            "value": "130604",
            "parentVal": "130600"
          },
          {
            "text": "满城县",
            "value": "130621",
            "parentVal": "130600"
          },
          {
            "text": "清苑县",
            "value": "130622",
            "parentVal": "130600"
          },
          {
            "text": "涞水县",
            "value": "130623",
            "parentVal": "130600"
          },
          {
            "text": "阜平县",
            "value": "130624",
            "parentVal": "130600"
          },
          {
            "text": "徐水县",
            "value": "130625",
            "parentVal": "130600"
          },
          {
            "text": "定兴县",
            "value": "130626",
            "parentVal": "130600"
          },
          {
            "text": "唐县",
            "value": "130627",
            "parentVal": "130600"
          },
          {
            "text": "高阳县",
            "value": "130628",
            "parentVal": "130600"
          },
          {
            "text": "容城县",
            "value": "130629",
            "parentVal": "130600"
          },
          {
            "text": "涞源县",
            "value": "130630",
            "parentVal": "130600"
          },
          {
            "text": "望都县",
            "value": "130631",
            "parentVal": "130600"
          },
          {
            "text": "安新县",
            "value": "130632",
            "parentVal": "130600"
          },
          {
            "text": "易县",
            "value": "130633",
            "parentVal": "130600"
          },
          {
            "text": "曲阳县",
            "value": "130634",
            "parentVal": "130600"
          },
          {
            "text": "蠡县",
            "value": "130635",
            "parentVal": "130600"
          },
          {
            "text": "顺平县",
            "value": "130636",
            "parentVal": "130600"
          },
          {
            "text": "博野县",
            "value": "130637",
            "parentVal": "130600"
          },
          {
            "text": "雄县",
            "value": "130638",
            "parentVal": "130600"
          },
          {
            "text": "涿州市",
            "value": "130681",
            "parentVal": "130600"
          },
          {
            "text": "定州市",
            "value": "130682",
            "parentVal": "130600"
          },
          {
            "text": "安国市",
            "value": "130683",
            "parentVal": "130600"
          },
          {
            "text": "高碑店市",
            "value": "130684",
            "parentVal": "130600"
          },
          {
            "text": "市辖区",
            "value": "130701",
            "parentVal": "130700"
          },
          {
            "text": "桥东区",
            "value": "130702",
            "parentVal": "130700"
          },
          {
            "text": "桥西区",
            "value": "130703",
            "parentVal": "130700"
          },
          {
            "text": "宣化区",
            "value": "130705",
            "parentVal": "130700"
          },
          {
            "text": "下花园区",
            "value": "130706",
            "parentVal": "130700"
          },
          {
            "text": "宣化县",
            "value": "130721",
            "parentVal": "130700"
          },
          {
            "text": "张北县",
            "value": "130722",
            "parentVal": "130700"
          },
          {
            "text": "康保县",
            "value": "130723",
            "parentVal": "130700"
          },
          {
            "text": "沽源县",
            "value": "130724",
            "parentVal": "130700"
          },
          {
            "text": "尚义县",
            "value": "130725",
            "parentVal": "130700"
          },
          {
            "text": "蔚县",
            "value": "130726",
            "parentVal": "130700"
          },
          {
            "text": "阳原县",
            "value": "130727",
            "parentVal": "130700"
          },
          {
            "text": "怀安县",
            "value": "130728",
            "parentVal": "130700"
          },
          {
            "text": "万全县",
            "value": "130729",
            "parentVal": "130700"
          },
          {
            "text": "怀来县",
            "value": "130730",
            "parentVal": "130700"
          },
          {
            "text": "涿鹿县",
            "value": "130731",
            "parentVal": "130700"
          },
          {
            "text": "赤城县",
            "value": "130732",
            "parentVal": "130700"
          },
          {
            "text": "崇礼县",
            "value": "130733",
            "parentVal": "130700"
          },
          {
            "text": "市辖区",
            "value": "130801",
            "parentVal": "130800"
          },
          {
            "text": "双桥区",
            "value": "130802",
            "parentVal": "130800"
          },
          {
            "text": "双滦区",
            "value": "130803",
            "parentVal": "130800"
          },
          {
            "text": "鹰手营子矿区",
            "value": "130804",
            "parentVal": "130800"
          },
          {
            "text": "承德县",
            "value": "130821",
            "parentVal": "130800"
          },
          {
            "text": "兴隆县",
            "value": "130822",
            "parentVal": "130800"
          },
          {
            "text": "平泉县",
            "value": "130823",
            "parentVal": "130800"
          },
          {
            "text": "滦平县",
            "value": "130824",
            "parentVal": "130800"
          },
          {
            "text": "隆化县",
            "value": "130825",
            "parentVal": "130800"
          },
          {
            "text": "丰宁满族自治县",
            "value": "130826",
            "parentVal": "130800"
          },
          {
            "text": "宽城满族自治县",
            "value": "130827",
            "parentVal": "130800"
          },
          {
            "text": "围场满族蒙古族自治县",
            "value": "130828",
            "parentVal": "130800"
          },
          {
            "text": "市辖区",
            "value": "130901",
            "parentVal": "130900"
          },
          {
            "text": "新华区",
            "value": "130902",
            "parentVal": "130900"
          },
          {
            "text": "运河区",
            "value": "130903",
            "parentVal": "130900"
          },
          {
            "text": "沧县",
            "value": "130921",
            "parentVal": "130900"
          },
          {
            "text": "青县",
            "value": "130922",
            "parentVal": "130900"
          },
          {
            "text": "东光县",
            "value": "130923",
            "parentVal": "130900"
          },
          {
            "text": "海兴县",
            "value": "130924",
            "parentVal": "130900"
          },
          {
            "text": "盐山县",
            "value": "130925",
            "parentVal": "130900"
          },
          {
            "text": "肃宁县",
            "value": "130926",
            "parentVal": "130900"
          },
          {
            "text": "南皮县",
            "value": "130927",
            "parentVal": "130900"
          },
          {
            "text": "吴桥县",
            "value": "130928",
            "parentVal": "130900"
          },
          {
            "text": "献县",
            "value": "130929",
            "parentVal": "130900"
          },
          {
            "text": "孟村回族自治县",
            "value": "130930",
            "parentVal": "130900"
          },
          {
            "text": "泊头市",
            "value": "130981",
            "parentVal": "130900"
          },
          {
            "text": "任丘市",
            "value": "130982",
            "parentVal": "130900"
          },
          {
            "text": "黄骅市",
            "value": "130983",
            "parentVal": "130900"
          },
          {
            "text": "河间市",
            "value": "130984",
            "parentVal": "130900"
          },
          {
            "text": "市辖区",
            "value": "131001",
            "parentVal": "131000"
          },
          {
            "text": "安次区",
            "value": "131002",
            "parentVal": "131000"
          },
          {
            "text": "广阳区",
            "value": "131003",
            "parentVal": "131000"
          },
          {
            "text": "固安县",
            "value": "131022",
            "parentVal": "131000"
          },
          {
            "text": "永清县",
            "value": "131023",
            "parentVal": "131000"
          },
          {
            "text": "香河县",
            "value": "131024",
            "parentVal": "131000"
          },
          {
            "text": "大城县",
            "value": "131025",
            "parentVal": "131000"
          },
          {
            "text": "文安县",
            "value": "131026",
            "parentVal": "131000"
          },
          {
            "text": "大厂回族自治县",
            "value": "131028",
            "parentVal": "131000"
          },
          {
            "text": "霸州市",
            "value": "131081",
            "parentVal": "131000"
          },
          {
            "text": "三河市",
            "value": "131082",
            "parentVal": "131000"
          },
          {
            "text": "市辖区",
            "value": "131101",
            "parentVal": "131100"
          },
          {
            "text": "桃城区",
            "value": "131102",
            "parentVal": "131100"
          },
          {
            "text": "枣强县",
            "value": "131121",
            "parentVal": "131100"
          },
          {
            "text": "武邑县",
            "value": "131122",
            "parentVal": "131100"
          },
          {
            "text": "武强县",
            "value": "131123",
            "parentVal": "131100"
          },
          {
            "text": "饶阳县",
            "value": "131124",
            "parentVal": "131100"
          },
          {
            "text": "安平县",
            "value": "131125",
            "parentVal": "131100"
          },
          {
            "text": "故城县",
            "value": "131126",
            "parentVal": "131100"
          },
          {
            "text": "景县",
            "value": "131127",
            "parentVal": "131100"
          },
          {
            "text": "阜城县",
            "value": "131128",
            "parentVal": "131100"
          },
          {
            "text": "冀州市",
            "value": "131181",
            "parentVal": "131100"
          },
          {
            "text": "深州市",
            "value": "131182",
            "parentVal": "131100"
          },
          {
            "text": "市辖区",
            "value": "140101",
            "parentVal": "140100"
          },
          {
            "text": "小店区",
            "value": "140105",
            "parentVal": "140100"
          },
          {
            "text": "迎泽区",
            "value": "140106",
            "parentVal": "140100"
          },
          {
            "text": "杏花岭区",
            "value": "140107",
            "parentVal": "140100"
          },
          {
            "text": "尖草坪区",
            "value": "140108",
            "parentVal": "140100"
          },
          {
            "text": "万柏林区",
            "value": "140109",
            "parentVal": "140100"
          },
          {
            "text": "晋源区",
            "value": "140110",
            "parentVal": "140100"
          },
          {
            "text": "清徐县",
            "value": "140121",
            "parentVal": "140100"
          },
          {
            "text": "阳曲县",
            "value": "140122",
            "parentVal": "140100"
          },
          {
            "text": "娄烦县",
            "value": "140123",
            "parentVal": "140100"
          },
          {
            "text": "古交市",
            "value": "140181",
            "parentVal": "140100"
          },
          {
            "text": "市辖区",
            "value": "140201",
            "parentVal": "140200"
          },
          {
            "text": "城区",
            "value": "140202",
            "parentVal": "140200"
          },
          {
            "text": "矿区",
            "value": "140203",
            "parentVal": "140200"
          },
          {
            "text": "南郊区",
            "value": "140211",
            "parentVal": "140200"
          },
          {
            "text": "新荣区",
            "value": "140212",
            "parentVal": "140200"
          },
          {
            "text": "阳高县",
            "value": "140221",
            "parentVal": "140200"
          },
          {
            "text": "天镇县",
            "value": "140222",
            "parentVal": "140200"
          },
          {
            "text": "广灵县",
            "value": "140223",
            "parentVal": "140200"
          },
          {
            "text": "灵丘县",
            "value": "140224",
            "parentVal": "140200"
          },
          {
            "text": "浑源县",
            "value": "140225",
            "parentVal": "140200"
          },
          {
            "text": "左云县",
            "value": "140226",
            "parentVal": "140200"
          },
          {
            "text": "大同县",
            "value": "140227",
            "parentVal": "140200"
          },
          {
            "text": "市辖区",
            "value": "140301",
            "parentVal": "140300"
          },
          {
            "text": "城区",
            "value": "140302",
            "parentVal": "140300"
          },
          {
            "text": "矿区",
            "value": "140303",
            "parentVal": "140300"
          },
          {
            "text": "郊区",
            "value": "140311",
            "parentVal": "140300"
          },
          {
            "text": "平定县",
            "value": "140321",
            "parentVal": "140300"
          },
          {
            "text": "盂县",
            "value": "140322",
            "parentVal": "140300"
          },
          {
            "text": "市辖区",
            "value": "140401",
            "parentVal": "140400"
          },
          {
            "text": "城区",
            "value": "140402",
            "parentVal": "140400"
          },
          {
            "text": "郊区",
            "value": "140411",
            "parentVal": "140400"
          },
          {
            "text": "长治县",
            "value": "140421",
            "parentVal": "140400"
          },
          {
            "text": "襄垣县",
            "value": "140423",
            "parentVal": "140400"
          },
          {
            "text": "屯留县",
            "value": "140424",
            "parentVal": "140400"
          },
          {
            "text": "平顺县",
            "value": "140425",
            "parentVal": "140400"
          },
          {
            "text": "黎城县",
            "value": "140426",
            "parentVal": "140400"
          },
          {
            "text": "壶关县",
            "value": "140427",
            "parentVal": "140400"
          },
          {
            "text": "长子县",
            "value": "140428",
            "parentVal": "140400"
          },
          {
            "text": "武乡县",
            "value": "140429",
            "parentVal": "140400"
          },
          {
            "text": "沁县",
            "value": "140430",
            "parentVal": "140400"
          },
          {
            "text": "沁源县",
            "value": "140431",
            "parentVal": "140400"
          },
          {
            "text": "潞城市",
            "value": "140481",
            "parentVal": "140400"
          },
          {
            "text": "市辖区",
            "value": "140501",
            "parentVal": "140500"
          },
          {
            "text": "城区",
            "value": "140502",
            "parentVal": "140500"
          },
          {
            "text": "沁水县",
            "value": "140521",
            "parentVal": "140500"
          },
          {
            "text": "阳城县",
            "value": "140522",
            "parentVal": "140500"
          },
          {
            "text": "陵川县",
            "value": "140524",
            "parentVal": "140500"
          },
          {
            "text": "泽州县",
            "value": "140525",
            "parentVal": "140500"
          },
          {
            "text": "高平市",
            "value": "140581",
            "parentVal": "140500"
          },
          {
            "text": "市辖区",
            "value": "140601",
            "parentVal": "140600"
          },
          {
            "text": "朔城区",
            "value": "140602",
            "parentVal": "140600"
          },
          {
            "text": "平鲁区",
            "value": "140603",
            "parentVal": "140600"
          },
          {
            "text": "山阴县",
            "value": "140621",
            "parentVal": "140600"
          },
          {
            "text": "应县",
            "value": "140622",
            "parentVal": "140600"
          },
          {
            "text": "右玉县",
            "value": "140623",
            "parentVal": "140600"
          },
          {
            "text": "怀仁县",
            "value": "140624",
            "parentVal": "140600"
          },
          {
            "text": "市辖区",
            "value": "140701",
            "parentVal": "140700"
          },
          {
            "text": "榆次区",
            "value": "140702",
            "parentVal": "140700"
          },
          {
            "text": "榆社县",
            "value": "140721",
            "parentVal": "140700"
          },
          {
            "text": "左权县",
            "value": "140722",
            "parentVal": "140700"
          },
          {
            "text": "和顺县",
            "value": "140723",
            "parentVal": "140700"
          },
          {
            "text": "昔阳县",
            "value": "140724",
            "parentVal": "140700"
          },
          {
            "text": "寿阳县",
            "value": "140725",
            "parentVal": "140700"
          },
          {
            "text": "太谷县",
            "value": "140726",
            "parentVal": "140700"
          },
          {
            "text": "祁县",
            "value": "140727",
            "parentVal": "140700"
          },
          {
            "text": "平遥县",
            "value": "140728",
            "parentVal": "140700"
          },
          {
            "text": "灵石县",
            "value": "140729",
            "parentVal": "140700"
          },
          {
            "text": "介休市",
            "value": "140781",
            "parentVal": "140700"
          },
          {
            "text": "市辖区",
            "value": "140801",
            "parentVal": "140800"
          },
          {
            "text": "盐湖区",
            "value": "140802",
            "parentVal": "140800"
          },
          {
            "text": "临猗县",
            "value": "140821",
            "parentVal": "140800"
          },
          {
            "text": "万荣县",
            "value": "140822",
            "parentVal": "140800"
          },
          {
            "text": "闻喜县",
            "value": "140823",
            "parentVal": "140800"
          },
          {
            "text": "稷山县",
            "value": "140824",
            "parentVal": "140800"
          },
          {
            "text": "新绛县",
            "value": "140825",
            "parentVal": "140800"
          },
          {
            "text": "绛县",
            "value": "140826",
            "parentVal": "140800"
          },
          {
            "text": "垣曲县",
            "value": "140827",
            "parentVal": "140800"
          },
          {
            "text": "夏县",
            "value": "140828",
            "parentVal": "140800"
          },
          {
            "text": "平陆县",
            "value": "140829",
            "parentVal": "140800"
          },
          {
            "text": "芮城县",
            "value": "140830",
            "parentVal": "140800"
          },
          {
            "text": "永济市",
            "value": "140881",
            "parentVal": "140800"
          },
          {
            "text": "河津市",
            "value": "140882",
            "parentVal": "140800"
          },
          {
            "text": "市辖区",
            "value": "140901",
            "parentVal": "140900"
          },
          {
            "text": "忻府区",
            "value": "140902",
            "parentVal": "140900"
          },
          {
            "text": "定襄县",
            "value": "140921",
            "parentVal": "140900"
          },
          {
            "text": "五台县",
            "value": "140922",
            "parentVal": "140900"
          },
          {
            "text": "代县",
            "value": "140923",
            "parentVal": "140900"
          },
          {
            "text": "繁峙县",
            "value": "140924",
            "parentVal": "140900"
          },
          {
            "text": "宁武县",
            "value": "140925",
            "parentVal": "140900"
          },
          {
            "text": "静乐县",
            "value": "140926",
            "parentVal": "140900"
          },
          {
            "text": "神池县",
            "value": "140927",
            "parentVal": "140900"
          },
          {
            "text": "五寨县",
            "value": "140928",
            "parentVal": "140900"
          },
          {
            "text": "岢岚县",
            "value": "140929",
            "parentVal": "140900"
          },
          {
            "text": "河曲县",
            "value": "140930",
            "parentVal": "140900"
          },
          {
            "text": "保德县",
            "value": "140931",
            "parentVal": "140900"
          },
          {
            "text": "偏关县",
            "value": "140932",
            "parentVal": "140900"
          },
          {
            "text": "原平市",
            "value": "140981",
            "parentVal": "140900"
          },
          {
            "text": "市辖区",
            "value": "141001",
            "parentVal": "141000"
          },
          {
            "text": "尧都区",
            "value": "141002",
            "parentVal": "141000"
          },
          {
            "text": "曲沃县",
            "value": "141021",
            "parentVal": "141000"
          },
          {
            "text": "翼城县",
            "value": "141022",
            "parentVal": "141000"
          },
          {
            "text": "襄汾县",
            "value": "141023",
            "parentVal": "141000"
          },
          {
            "text": "洪洞县",
            "value": "141024",
            "parentVal": "141000"
          },
          {
            "text": "古县",
            "value": "141025",
            "parentVal": "141000"
          },
          {
            "text": "安泽县",
            "value": "141026",
            "parentVal": "141000"
          },
          {
            "text": "浮山县",
            "value": "141027",
            "parentVal": "141000"
          },
          {
            "text": "吉县",
            "value": "141028",
            "parentVal": "141000"
          },
          {
            "text": "乡宁县",
            "value": "141029",
            "parentVal": "141000"
          },
          {
            "text": "大宁县",
            "value": "141030",
            "parentVal": "141000"
          },
          {
            "text": "隰县",
            "value": "141031",
            "parentVal": "141000"
          },
          {
            "text": "永和县",
            "value": "141032",
            "parentVal": "141000"
          },
          {
            "text": "蒲县",
            "value": "141033",
            "parentVal": "141000"
          },
          {
            "text": "汾西县",
            "value": "141034",
            "parentVal": "141000"
          },
          {
            "text": "侯马市",
            "value": "141081",
            "parentVal": "141000"
          },
          {
            "text": "霍州市",
            "value": "141082",
            "parentVal": "141000"
          },
          {
            "text": "市辖区",
            "value": "141101",
            "parentVal": "141100"
          },
          {
            "text": "离石区",
            "value": "141102",
            "parentVal": "141100"
          },
          {
            "text": "文水县",
            "value": "141121",
            "parentVal": "141100"
          },
          {
            "text": "交城县",
            "value": "141122",
            "parentVal": "141100"
          },
          {
            "text": "兴县",
            "value": "141123",
            "parentVal": "141100"
          },
          {
            "text": "临县",
            "value": "141124",
            "parentVal": "141100"
          },
          {
            "text": "柳林县",
            "value": "141125",
            "parentVal": "141100"
          },
          {
            "text": "石楼县",
            "value": "141126",
            "parentVal": "141100"
          },
          {
            "text": "岚县",
            "value": "141127",
            "parentVal": "141100"
          },
          {
            "text": "方山县",
            "value": "141128",
            "parentVal": "141100"
          },
          {
            "text": "中阳县",
            "value": "141129",
            "parentVal": "141100"
          },
          {
            "text": "交口县",
            "value": "141130",
            "parentVal": "141100"
          },
          {
            "text": "孝义市",
            "value": "141181",
            "parentVal": "141100"
          },
          {
            "text": "汾阳市",
            "value": "141182",
            "parentVal": "141100"
          },
          {
            "text": "市辖区",
            "value": "150101",
            "parentVal": "150100"
          },
          {
            "text": "新城区",
            "value": "150102",
            "parentVal": "150100"
          },
          {
            "text": "回民区",
            "value": "150103",
            "parentVal": "150100"
          },
          {
            "text": "玉泉区",
            "value": "150104",
            "parentVal": "150100"
          },
          {
            "text": "赛罕区",
            "value": "150105",
            "parentVal": "150100"
          },
          {
            "text": "土默特左旗",
            "value": "150121",
            "parentVal": "150100"
          },
          {
            "text": "托克托县",
            "value": "150122",
            "parentVal": "150100"
          },
          {
            "text": "和林格尔县",
            "value": "150123",
            "parentVal": "150100"
          },
          {
            "text": "清水河县",
            "value": "150124",
            "parentVal": "150100"
          },
          {
            "text": "武川县",
            "value": "150125",
            "parentVal": "150100"
          },
          {
            "text": "市辖区",
            "value": "150201",
            "parentVal": "150200"
          },
          {
            "text": "东河区",
            "value": "150202",
            "parentVal": "150200"
          },
          {
            "text": "昆都仑区",
            "value": "150203",
            "parentVal": "150200"
          },
          {
            "text": "青山区",
            "value": "150204",
            "parentVal": "150200"
          },
          {
            "text": "石拐区",
            "value": "150205",
            "parentVal": "150200"
          },
          {
            "text": "白云鄂博矿区",
            "value": "150206",
            "parentVal": "150200"
          },
          {
            "text": "九原区",
            "value": "150207",
            "parentVal": "150200"
          },
          {
            "text": "土默特右旗",
            "value": "150221",
            "parentVal": "150200"
          },
          {
            "text": "固阳县",
            "value": "150222",
            "parentVal": "150200"
          },
          {
            "text": "达尔罕茂明安联合旗",
            "value": "150223",
            "parentVal": "150200"
          },
          {
            "text": "市辖区",
            "value": "150301",
            "parentVal": "150300"
          },
          {
            "text": "海勃湾区",
            "value": "150302",
            "parentVal": "150300"
          },
          {
            "text": "海南区",
            "value": "150303",
            "parentVal": "150300"
          },
          {
            "text": "乌达区",
            "value": "150304",
            "parentVal": "150300"
          },
          {
            "text": "市辖区",
            "value": "150401",
            "parentVal": "150400"
          },
          {
            "text": "红山区",
            "value": "150402",
            "parentVal": "150400"
          },
          {
            "text": "元宝山区",
            "value": "150403",
            "parentVal": "150400"
          },
          {
            "text": "松山区",
            "value": "150404",
            "parentVal": "150400"
          },
          {
            "text": "阿鲁科尔沁旗",
            "value": "150421",
            "parentVal": "150400"
          },
          {
            "text": "巴林左旗",
            "value": "150422",
            "parentVal": "150400"
          },
          {
            "text": "巴林右旗",
            "value": "150423",
            "parentVal": "150400"
          },
          {
            "text": "林西县",
            "value": "150424",
            "parentVal": "150400"
          },
          {
            "text": "克什克腾旗",
            "value": "150425",
            "parentVal": "150400"
          },
          {
            "text": "翁牛特旗",
            "value": "150426",
            "parentVal": "150400"
          },
          {
            "text": "喀喇沁旗",
            "value": "150428",
            "parentVal": "150400"
          },
          {
            "text": "宁城县",
            "value": "150429",
            "parentVal": "150400"
          },
          {
            "text": "敖汉旗",
            "value": "150430",
            "parentVal": "150400"
          },
          {
            "text": "市辖区",
            "value": "150501",
            "parentVal": "150500"
          },
          {
            "text": "科尔沁区",
            "value": "150502",
            "parentVal": "150500"
          },
          {
            "text": "科尔沁左翼中旗",
            "value": "150521",
            "parentVal": "150500"
          },
          {
            "text": "科尔沁左翼后旗",
            "value": "150522",
            "parentVal": "150500"
          },
          {
            "text": "开鲁县",
            "value": "150523",
            "parentVal": "150500"
          },
          {
            "text": "库伦旗",
            "value": "150524",
            "parentVal": "150500"
          },
          {
            "text": "奈曼旗",
            "value": "150525",
            "parentVal": "150500"
          },
          {
            "text": "扎鲁特旗",
            "value": "150526",
            "parentVal": "150500"
          },
          {
            "text": "霍林郭勒市",
            "value": "150581",
            "parentVal": "150500"
          },
          {
            "text": "市辖区",
            "value": "150601",
            "parentVal": "150600"
          },
          {
            "text": "东胜区",
            "value": "150602",
            "parentVal": "150600"
          },
          {
            "text": "达拉特旗",
            "value": "150621",
            "parentVal": "150600"
          },
          {
            "text": "准格尔旗",
            "value": "150622",
            "parentVal": "150600"
          },
          {
            "text": "鄂托克前旗",
            "value": "150623",
            "parentVal": "150600"
          },
          {
            "text": "鄂托克旗",
            "value": "150624",
            "parentVal": "150600"
          },
          {
            "text": "杭锦旗",
            "value": "150625",
            "parentVal": "150600"
          },
          {
            "text": "乌审旗",
            "value": "150626",
            "parentVal": "150600"
          },
          {
            "text": "伊金霍洛旗",
            "value": "150627",
            "parentVal": "150600"
          },
          {
            "text": "市辖区",
            "value": "150701",
            "parentVal": "150700"
          },
          {
            "text": "海拉尔区",
            "value": "150702",
            "parentVal": "150700"
          },
          {
            "text": "扎赉诺尔区",
            "value": "150703",
            "parentVal": "150700"
          },
          {
            "text": "阿荣旗",
            "value": "150721",
            "parentVal": "150700"
          },
          {
            "text": "莫力达瓦达斡尔族自治旗",
            "value": "150722",
            "parentVal": "150700"
          },
          {
            "text": "鄂伦春自治旗",
            "value": "150723",
            "parentVal": "150700"
          },
          {
            "text": "鄂温克族自治旗",
            "value": "150724",
            "parentVal": "150700"
          },
          {
            "text": "陈巴尔虎旗",
            "value": "150725",
            "parentVal": "150700"
          },
          {
            "text": "新巴尔虎左旗",
            "value": "150726",
            "parentVal": "150700"
          },
          {
            "text": "新巴尔虎右旗",
            "value": "150727",
            "parentVal": "150700"
          },
          {
            "text": "满洲里市",
            "value": "150781",
            "parentVal": "150700"
          },
          {
            "text": "牙克石市",
            "value": "150782",
            "parentVal": "150700"
          },
          {
            "text": "扎兰屯市",
            "value": "150783",
            "parentVal": "150700"
          },
          {
            "text": "额尔古纳市",
            "value": "150784",
            "parentVal": "150700"
          },
          {
            "text": "根河市",
            "value": "150785",
            "parentVal": "150700"
          },
          {
            "text": "市辖区",
            "value": "150801",
            "parentVal": "150800"
          },
          {
            "text": "临河区",
            "value": "150802",
            "parentVal": "150800"
          },
          {
            "text": "五原县",
            "value": "150821",
            "parentVal": "150800"
          },
          {
            "text": "磴口县",
            "value": "150822",
            "parentVal": "150800"
          },
          {
            "text": "乌拉特前旗",
            "value": "150823",
            "parentVal": "150800"
          },
          {
            "text": "乌拉特中旗",
            "value": "150824",
            "parentVal": "150800"
          },
          {
            "text": "乌拉特后旗",
            "value": "150825",
            "parentVal": "150800"
          },
          {
            "text": "杭锦后旗",
            "value": "150826",
            "parentVal": "150800"
          },
          {
            "text": "市辖区",
            "value": "150901",
            "parentVal": "150900"
          },
          {
            "text": "集宁区",
            "value": "150902",
            "parentVal": "150900"
          },
          {
            "text": "卓资县",
            "value": "150921",
            "parentVal": "150900"
          },
          {
            "text": "化德县",
            "value": "150922",
            "parentVal": "150900"
          },
          {
            "text": "商都县",
            "value": "150923",
            "parentVal": "150900"
          },
          {
            "text": "兴和县",
            "value": "150924",
            "parentVal": "150900"
          },
          {
            "text": "凉城县",
            "value": "150925",
            "parentVal": "150900"
          },
          {
            "text": "察哈尔右翼前旗",
            "value": "150926",
            "parentVal": "150900"
          },
          {
            "text": "察哈尔右翼中旗",
            "value": "150927",
            "parentVal": "150900"
          },
          {
            "text": "察哈尔右翼后旗",
            "value": "150928",
            "parentVal": "150900"
          },
          {
            "text": "四子王旗",
            "value": "150929",
            "parentVal": "150900"
          },
          {
            "text": "丰镇市",
            "value": "150981",
            "parentVal": "150900"
          },
          {
            "text": "乌兰浩特市",
            "value": "152201",
            "parentVal": "152200"
          },
          {
            "text": "阿尔山市",
            "value": "152202",
            "parentVal": "152200"
          },
          {
            "text": "科尔沁右翼前旗",
            "value": "152221",
            "parentVal": "152200"
          },
          {
            "text": "科尔沁右翼中旗",
            "value": "152222",
            "parentVal": "152200"
          },
          {
            "text": "扎赉特旗",
            "value": "152223",
            "parentVal": "152200"
          },
          {
            "text": "突泉县",
            "value": "152224",
            "parentVal": "152200"
          },
          {
            "text": "二连浩特市",
            "value": "152501",
            "parentVal": "152500"
          },
          {
            "text": "锡林浩特市",
            "value": "152502",
            "parentVal": "152500"
          },
          {
            "text": "阿巴嘎旗",
            "value": "152522",
            "parentVal": "152500"
          },
          {
            "text": "苏尼特左旗",
            "value": "152523",
            "parentVal": "152500"
          },
          {
            "text": "苏尼特右旗",
            "value": "152524",
            "parentVal": "152500"
          },
          {
            "text": "东乌珠穆沁旗",
            "value": "152525",
            "parentVal": "152500"
          },
          {
            "text": "西乌珠穆沁旗",
            "value": "152526",
            "parentVal": "152500"
          },
          {
            "text": "太仆寺旗",
            "value": "152527",
            "parentVal": "152500"
          },
          {
            "text": "镶黄旗",
            "value": "152528",
            "parentVal": "152500"
          },
          {
            "text": "正镶白旗",
            "value": "152529",
            "parentVal": "152500"
          },
          {
            "text": "正蓝旗",
            "value": "152530",
            "parentVal": "152500"
          },
          {
            "text": "多伦县",
            "value": "152531",
            "parentVal": "152500"
          },
          {
            "text": "阿拉善左旗",
            "value": "152921",
            "parentVal": "152900"
          },
          {
            "text": "阿拉善右旗",
            "value": "152922",
            "parentVal": "152900"
          },
          {
            "text": "额济纳旗",
            "value": "152923",
            "parentVal": "152900"
          },
          {
            "text": "市辖区",
            "value": "210101",
            "parentVal": "210100"
          },
          {
            "text": "和平区",
            "value": "210102",
            "parentVal": "210100"
          },
          {
            "text": "沈河区",
            "value": "210103",
            "parentVal": "210100"
          },
          {
            "text": "大东区",
            "value": "210104",
            "parentVal": "210100"
          },
          {
            "text": "皇姑区",
            "value": "210105",
            "parentVal": "210100"
          },
          {
            "text": "铁西区",
            "value": "210106",
            "parentVal": "210100"
          },
          {
            "text": "苏家屯区",
            "value": "210111",
            "parentVal": "210100"
          },
          {
            "text": "东陵区",
            "value": "210112",
            "parentVal": "210100"
          },
          {
            "text": "沈北新区",
            "value": "210113",
            "parentVal": "210100"
          },
          {
            "text": "于洪区",
            "value": "210114",
            "parentVal": "210100"
          },
          {
            "text": "辽中县",
            "value": "210122",
            "parentVal": "210100"
          },
          {
            "text": "康平县",
            "value": "210123",
            "parentVal": "210100"
          },
          {
            "text": "法库县",
            "value": "210124",
            "parentVal": "210100"
          },
          {
            "text": "新民市",
            "value": "210181",
            "parentVal": "210100"
          },
          {
            "text": "市辖区",
            "value": "210201",
            "parentVal": "210200"
          },
          {
            "text": "中山区",
            "value": "210202",
            "parentVal": "210200"
          },
          {
            "text": "西岗区",
            "value": "210203",
            "parentVal": "210200"
          },
          {
            "text": "沙河口区",
            "value": "210204",
            "parentVal": "210200"
          },
          {
            "text": "甘井子区",
            "value": "210211",
            "parentVal": "210200"
          },
          {
            "text": "旅顺口区",
            "value": "210212",
            "parentVal": "210200"
          },
          {
            "text": "金州区",
            "value": "210213",
            "parentVal": "210200"
          },
          {
            "text": "长海县",
            "value": "210224",
            "parentVal": "210200"
          },
          {
            "text": "瓦房店市",
            "value": "210281",
            "parentVal": "210200"
          },
          {
            "text": "普兰店市",
            "value": "210282",
            "parentVal": "210200"
          },
          {
            "text": "庄河市",
            "value": "210283",
            "parentVal": "210200"
          },
          {
            "text": "市辖区",
            "value": "210301",
            "parentVal": "210300"
          },
          {
            "text": "铁东区",
            "value": "210302",
            "parentVal": "210300"
          },
          {
            "text": "铁西区",
            "value": "210303",
            "parentVal": "210300"
          },
          {
            "text": "立山区",
            "value": "210304",
            "parentVal": "210300"
          },
          {
            "text": "千山区",
            "value": "210311",
            "parentVal": "210300"
          },
          {
            "text": "台安县",
            "value": "210321",
            "parentVal": "210300"
          },
          {
            "text": "岫岩满族自治县",
            "value": "210323",
            "parentVal": "210300"
          },
          {
            "text": "海城市",
            "value": "210381",
            "parentVal": "210300"
          },
          {
            "text": "市辖区",
            "value": "210401",
            "parentVal": "210400"
          },
          {
            "text": "新抚区",
            "value": "210402",
            "parentVal": "210400"
          },
          {
            "text": "东洲区",
            "value": "210403",
            "parentVal": "210400"
          },
          {
            "text": "望花区",
            "value": "210404",
            "parentVal": "210400"
          },
          {
            "text": "顺城区",
            "value": "210411",
            "parentVal": "210400"
          },
          {
            "text": "抚顺县",
            "value": "210421",
            "parentVal": "210400"
          },
          {
            "text": "新宾满族自治县",
            "value": "210422",
            "parentVal": "210400"
          },
          {
            "text": "清原满族自治县",
            "value": "210423",
            "parentVal": "210400"
          },
          {
            "text": "市辖区",
            "value": "210501",
            "parentVal": "210500"
          },
          {
            "text": "平山区",
            "value": "210502",
            "parentVal": "210500"
          },
          {
            "text": "溪湖区",
            "value": "210503",
            "parentVal": "210500"
          },
          {
            "text": "明山区",
            "value": "210504",
            "parentVal": "210500"
          },
          {
            "text": "南芬区",
            "value": "210505",
            "parentVal": "210500"
          },
          {
            "text": "本溪满族自治县",
            "value": "210521",
            "parentVal": "210500"
          },
          {
            "text": "桓仁满族自治县",
            "value": "210522",
            "parentVal": "210500"
          },
          {
            "text": "市辖区",
            "value": "210601",
            "parentVal": "210600"
          },
          {
            "text": "元宝区",
            "value": "210602",
            "parentVal": "210600"
          },
          {
            "text": "振兴区",
            "value": "210603",
            "parentVal": "210600"
          },
          {
            "text": "振安区",
            "value": "210604",
            "parentVal": "210600"
          },
          {
            "text": "宽甸满族自治县",
            "value": "210624",
            "parentVal": "210600"
          },
          {
            "text": "东港市",
            "value": "210681",
            "parentVal": "210600"
          },
          {
            "text": "凤城市",
            "value": "210682",
            "parentVal": "210600"
          },
          {
            "text": "市辖区",
            "value": "210701",
            "parentVal": "210700"
          },
          {
            "text": "古塔区",
            "value": "210702",
            "parentVal": "210700"
          },
          {
            "text": "凌河区",
            "value": "210703",
            "parentVal": "210700"
          },
          {
            "text": "太和区",
            "value": "210711",
            "parentVal": "210700"
          },
          {
            "text": "黑山县",
            "value": "210726",
            "parentVal": "210700"
          },
          {
            "text": "义县",
            "value": "210727",
            "parentVal": "210700"
          },
          {
            "text": "凌海市",
            "value": "210781",
            "parentVal": "210700"
          },
          {
            "text": "北镇市",
            "value": "210782",
            "parentVal": "210700"
          },
          {
            "text": "市辖区",
            "value": "210801",
            "parentVal": "210800"
          },
          {
            "text": "站前区",
            "value": "210802",
            "parentVal": "210800"
          },
          {
            "text": "西市区",
            "value": "210803",
            "parentVal": "210800"
          },
          {
            "text": "鲅鱼圈区",
            "value": "210804",
            "parentVal": "210800"
          },
          {
            "text": "老边区",
            "value": "210811",
            "parentVal": "210800"
          },
          {
            "text": "盖州市",
            "value": "210881",
            "parentVal": "210800"
          },
          {
            "text": "大石桥市",
            "value": "210882",
            "parentVal": "210800"
          },
          {
            "text": "市辖区",
            "value": "210901",
            "parentVal": "210900"
          },
          {
            "text": "海州区",
            "value": "210902",
            "parentVal": "210900"
          },
          {
            "text": "新邱区",
            "value": "210903",
            "parentVal": "210900"
          },
          {
            "text": "太平区",
            "value": "210904",
            "parentVal": "210900"
          },
          {
            "text": "清河门区",
            "value": "210905",
            "parentVal": "210900"
          },
          {
            "text": "细河区",
            "value": "210911",
            "parentVal": "210900"
          },
          {
            "text": "阜新蒙古族自治县",
            "value": "210921",
            "parentVal": "210900"
          },
          {
            "text": "彰武县",
            "value": "210922",
            "parentVal": "210900"
          },
          {
            "text": "市辖区",
            "value": "211001",
            "parentVal": "211000"
          },
          {
            "text": "白塔区",
            "value": "211002",
            "parentVal": "211000"
          },
          {
            "text": "文圣区",
            "value": "211003",
            "parentVal": "211000"
          },
          {
            "text": "宏伟区",
            "value": "211004",
            "parentVal": "211000"
          },
          {
            "text": "弓长岭区",
            "value": "211005",
            "parentVal": "211000"
          },
          {
            "text": "太子河区",
            "value": "211011",
            "parentVal": "211000"
          },
          {
            "text": "辽阳县",
            "value": "211021",
            "parentVal": "211000"
          },
          {
            "text": "灯塔市",
            "value": "211081",
            "parentVal": "211000"
          },
          {
            "text": "市辖区",
            "value": "211101",
            "parentVal": "211100"
          },
          {
            "text": "双台子区",
            "value": "211102",
            "parentVal": "211100"
          },
          {
            "text": "兴隆台区",
            "value": "211103",
            "parentVal": "211100"
          },
          {
            "text": "大洼县",
            "value": "211121",
            "parentVal": "211100"
          },
          {
            "text": "盘山县",
            "value": "211122",
            "parentVal": "211100"
          },
          {
            "text": "市辖区",
            "value": "211201",
            "parentVal": "211200"
          },
          {
            "text": "银州区",
            "value": "211202",
            "parentVal": "211200"
          },
          {
            "text": "清河区",
            "value": "211204",
            "parentVal": "211200"
          },
          {
            "text": "铁岭县",
            "value": "211221",
            "parentVal": "211200"
          },
          {
            "text": "西丰县",
            "value": "211223",
            "parentVal": "211200"
          },
          {
            "text": "昌图县",
            "value": "211224",
            "parentVal": "211200"
          },
          {
            "text": "调兵山市",
            "value": "211281",
            "parentVal": "211200"
          },
          {
            "text": "开原市",
            "value": "211282",
            "parentVal": "211200"
          },
          {
            "text": "市辖区",
            "value": "211301",
            "parentVal": "211300"
          },
          {
            "text": "双塔区",
            "value": "211302",
            "parentVal": "211300"
          },
          {
            "text": "龙城区",
            "value": "211303",
            "parentVal": "211300"
          },
          {
            "text": "朝阳县",
            "value": "211321",
            "parentVal": "211300"
          },
          {
            "text": "建平县",
            "value": "211322",
            "parentVal": "211300"
          },
          {
            "text": "喀喇沁左翼蒙古族自治县",
            "value": "211324",
            "parentVal": "211300"
          },
          {
            "text": "北票市",
            "value": "211381",
            "parentVal": "211300"
          },
          {
            "text": "凌源市",
            "value": "211382",
            "parentVal": "211300"
          },
          {
            "text": "市辖区",
            "value": "211401",
            "parentVal": "211400"
          },
          {
            "text": "连山区",
            "value": "211402",
            "parentVal": "211400"
          },
          {
            "text": "龙港区",
            "value": "211403",
            "parentVal": "211400"
          },
          {
            "text": "南票区",
            "value": "211404",
            "parentVal": "211400"
          },
          {
            "text": "绥中县",
            "value": "211421",
            "parentVal": "211400"
          },
          {
            "text": "建昌县",
            "value": "211422",
            "parentVal": "211400"
          },
          {
            "text": "兴城市",
            "value": "211481",
            "parentVal": "211400"
          },
          {
            "text": "市辖区",
            "value": "220101",
            "parentVal": "220100"
          },
          {
            "text": "南关区",
            "value": "220102",
            "parentVal": "220100"
          },
          {
            "text": "宽城区",
            "value": "220103",
            "parentVal": "220100"
          },
          {
            "text": "朝阳区",
            "value": "220104",
            "parentVal": "220100"
          },
          {
            "text": "二道区",
            "value": "220105",
            "parentVal": "220100"
          },
          {
            "text": "绿园区",
            "value": "220106",
            "parentVal": "220100"
          },
          {
            "text": "双阳区",
            "value": "220112",
            "parentVal": "220100"
          },
          {
            "text": "农安县",
            "value": "220122",
            "parentVal": "220100"
          },
          {
            "text": "九台市",
            "value": "220181",
            "parentVal": "220100"
          },
          {
            "text": "榆树市",
            "value": "220182",
            "parentVal": "220100"
          },
          {
            "text": "德惠市",
            "value": "220183",
            "parentVal": "220100"
          },
          {
            "text": "市辖区",
            "value": "220201",
            "parentVal": "220200"
          },
          {
            "text": "昌邑区",
            "value": "220202",
            "parentVal": "220200"
          },
          {
            "text": "龙潭区",
            "value": "220203",
            "parentVal": "220200"
          },
          {
            "text": "船营区",
            "value": "220204",
            "parentVal": "220200"
          },
          {
            "text": "丰满区",
            "value": "220211",
            "parentVal": "220200"
          },
          {
            "text": "永吉县",
            "value": "220221",
            "parentVal": "220200"
          },
          {
            "text": "蛟河市",
            "value": "220281",
            "parentVal": "220200"
          },
          {
            "text": "桦甸市",
            "value": "220282",
            "parentVal": "220200"
          },
          {
            "text": "舒兰市",
            "value": "220283",
            "parentVal": "220200"
          },
          {
            "text": "磐石市",
            "value": "220284",
            "parentVal": "220200"
          },
          {
            "text": "市辖区",
            "value": "220301",
            "parentVal": "220300"
          },
          {
            "text": "铁西区",
            "value": "220302",
            "parentVal": "220300"
          },
          {
            "text": "铁东区",
            "value": "220303",
            "parentVal": "220300"
          },
          {
            "text": "梨树县",
            "value": "220322",
            "parentVal": "220300"
          },
          {
            "text": "伊通满族自治县",
            "value": "220323",
            "parentVal": "220300"
          },
          {
            "text": "公主岭市",
            "value": "220381",
            "parentVal": "220300"
          },
          {
            "text": "双辽市",
            "value": "220382",
            "parentVal": "220300"
          },
          {
            "text": "市辖区",
            "value": "220401",
            "parentVal": "220400"
          },
          {
            "text": "龙山区",
            "value": "220402",
            "parentVal": "220400"
          },
          {
            "text": "西安区",
            "value": "220403",
            "parentVal": "220400"
          },
          {
            "text": "东丰县",
            "value": "220421",
            "parentVal": "220400"
          },
          {
            "text": "东辽县",
            "value": "220422",
            "parentVal": "220400"
          },
          {
            "text": "市辖区",
            "value": "220501",
            "parentVal": "220500"
          },
          {
            "text": "东昌区",
            "value": "220502",
            "parentVal": "220500"
          },
          {
            "text": "二道江区",
            "value": "220503",
            "parentVal": "220500"
          },
          {
            "text": "通化县",
            "value": "220521",
            "parentVal": "220500"
          },
          {
            "text": "辉南县",
            "value": "220523",
            "parentVal": "220500"
          },
          {
            "text": "柳河县",
            "value": "220524",
            "parentVal": "220500"
          },
          {
            "text": "梅河口市",
            "value": "220581",
            "parentVal": "220500"
          },
          {
            "text": "集安市",
            "value": "220582",
            "parentVal": "220500"
          },
          {
            "text": "市辖区",
            "value": "220601",
            "parentVal": "220600"
          },
          {
            "text": "浑江区",
            "value": "220602",
            "parentVal": "220600"
          },
          {
            "text": "江源区",
            "value": "220605",
            "parentVal": "220600"
          },
          {
            "text": "抚松县",
            "value": "220621",
            "parentVal": "220600"
          },
          {
            "text": "靖宇县",
            "value": "220622",
            "parentVal": "220600"
          },
          {
            "text": "长白朝鲜族自治县",
            "value": "220623",
            "parentVal": "220600"
          },
          {
            "text": "临江市",
            "value": "220681",
            "parentVal": "220600"
          },
          {
            "text": "市辖区",
            "value": "220701",
            "parentVal": "220700"
          },
          {
            "text": "宁江区",
            "value": "220702",
            "parentVal": "220700"
          },
          {
            "text": "前郭尔罗斯蒙古族自治县",
            "value": "220721",
            "parentVal": "220700"
          },
          {
            "text": "长岭县",
            "value": "220722",
            "parentVal": "220700"
          },
          {
            "text": "乾安县",
            "value": "220723",
            "parentVal": "220700"
          },
          {
            "text": "扶余市",
            "value": "220781",
            "parentVal": "220700"
          },
          {
            "text": "市辖区",
            "value": "220801",
            "parentVal": "220800"
          },
          {
            "text": "洮北区",
            "value": "220802",
            "parentVal": "220800"
          },
          {
            "text": "镇赉县",
            "value": "220821",
            "parentVal": "220800"
          },
          {
            "text": "通榆县",
            "value": "220822",
            "parentVal": "220800"
          },
          {
            "text": "洮南市",
            "value": "220881",
            "parentVal": "220800"
          },
          {
            "text": "大安市",
            "value": "220882",
            "parentVal": "220800"
          },
          {
            "text": "延吉市",
            "value": "222401",
            "parentVal": "222400"
          },
          {
            "text": "图们市",
            "value": "222402",
            "parentVal": "222400"
          },
          {
            "text": "敦化市",
            "value": "222403",
            "parentVal": "222400"
          },
          {
            "text": "珲春市",
            "value": "222404",
            "parentVal": "222400"
          },
          {
            "text": "龙井市",
            "value": "222405",
            "parentVal": "222400"
          },
          {
            "text": "和龙市",
            "value": "222406",
            "parentVal": "222400"
          },
          {
            "text": "汪清县",
            "value": "222424",
            "parentVal": "222400"
          },
          {
            "text": "安图县",
            "value": "222426",
            "parentVal": "222400"
          },
          {
            "text": "市辖区",
            "value": "230101",
            "parentVal": "230100"
          },
          {
            "text": "道里区",
            "value": "230102",
            "parentVal": "230100"
          },
          {
            "text": "南岗区",
            "value": "230103",
            "parentVal": "230100"
          },
          {
            "text": "道外区",
            "value": "230104",
            "parentVal": "230100"
          },
          {
            "text": "平房区",
            "value": "230108",
            "parentVal": "230100"
          },
          {
            "text": "松北区",
            "value": "230109",
            "parentVal": "230100"
          },
          {
            "text": "香坊区",
            "value": "230110",
            "parentVal": "230100"
          },
          {
            "text": "呼兰区",
            "value": "230111",
            "parentVal": "230100"
          },
          {
            "text": "阿城区",
            "value": "230112",
            "parentVal": "230100"
          },
          {
            "text": "依兰县",
            "value": "230123",
            "parentVal": "230100"
          },
          {
            "text": "方正县",
            "value": "230124",
            "parentVal": "230100"
          },
          {
            "text": "宾县",
            "value": "230125",
            "parentVal": "230100"
          },
          {
            "text": "巴彦县",
            "value": "230126",
            "parentVal": "230100"
          },
          {
            "text": "木兰县",
            "value": "230127",
            "parentVal": "230100"
          },
          {
            "text": "通河县",
            "value": "230128",
            "parentVal": "230100"
          },
          {
            "text": "延寿县",
            "value": "230129",
            "parentVal": "230100"
          },
          {
            "text": "双城市",
            "value": "230182",
            "parentVal": "230100"
          },
          {
            "text": "尚志市",
            "value": "230183",
            "parentVal": "230100"
          },
          {
            "text": "五常市",
            "value": "230184",
            "parentVal": "230100"
          },
          {
            "text": "市辖区",
            "value": "230201",
            "parentVal": "230200"
          },
          {
            "text": "龙沙区",
            "value": "230202",
            "parentVal": "230200"
          },
          {
            "text": "建华区",
            "value": "230203",
            "parentVal": "230200"
          },
          {
            "text": "铁锋区",
            "value": "230204",
            "parentVal": "230200"
          },
          {
            "text": "昂昂溪区",
            "value": "230205",
            "parentVal": "230200"
          },
          {
            "text": "富拉尔基区",
            "value": "230206",
            "parentVal": "230200"
          },
          {
            "text": "碾子山区",
            "value": "230207",
            "parentVal": "230200"
          },
          {
            "text": "梅里斯达斡尔族区",
            "value": "230208",
            "parentVal": "230200"
          },
          {
            "text": "龙江县",
            "value": "230221",
            "parentVal": "230200"
          },
          {
            "text": "依安县",
            "value": "230223",
            "parentVal": "230200"
          },
          {
            "text": "泰来县",
            "value": "230224",
            "parentVal": "230200"
          },
          {
            "text": "甘南县",
            "value": "230225",
            "parentVal": "230200"
          },
          {
            "text": "富裕县",
            "value": "230227",
            "parentVal": "230200"
          },
          {
            "text": "克山县",
            "value": "230229",
            "parentVal": "230200"
          },
          {
            "text": "克东县",
            "value": "230230",
            "parentVal": "230200"
          },
          {
            "text": "拜泉县",
            "value": "230231",
            "parentVal": "230200"
          },
          {
            "text": "讷河市",
            "value": "230281",
            "parentVal": "230200"
          },
          {
            "text": "市辖区",
            "value": "230301",
            "parentVal": "230300"
          },
          {
            "text": "鸡冠区",
            "value": "230302",
            "parentVal": "230300"
          },
          {
            "text": "恒山区",
            "value": "230303",
            "parentVal": "230300"
          },
          {
            "text": "滴道区",
            "value": "230304",
            "parentVal": "230300"
          },
          {
            "text": "梨树区",
            "value": "230305",
            "parentVal": "230300"
          },
          {
            "text": "城子河区",
            "value": "230306",
            "parentVal": "230300"
          },
          {
            "text": "麻山区",
            "value": "230307",
            "parentVal": "230300"
          },
          {
            "text": "鸡东县",
            "value": "230321",
            "parentVal": "230300"
          },
          {
            "text": "虎林市",
            "value": "230381",
            "parentVal": "230300"
          },
          {
            "text": "密山市",
            "value": "230382",
            "parentVal": "230300"
          },
          {
            "text": "市辖区",
            "value": "230401",
            "parentVal": "230400"
          },
          {
            "text": "向阳区",
            "value": "230402",
            "parentVal": "230400"
          },
          {
            "text": "工农区",
            "value": "230403",
            "parentVal": "230400"
          },
          {
            "text": "南山区",
            "value": "230404",
            "parentVal": "230400"
          },
          {
            "text": "兴安区",
            "value": "230405",
            "parentVal": "230400"
          },
          {
            "text": "东山区",
            "value": "230406",
            "parentVal": "230400"
          },
          {
            "text": "兴山区",
            "value": "230407",
            "parentVal": "230400"
          },
          {
            "text": "萝北县",
            "value": "230421",
            "parentVal": "230400"
          },
          {
            "text": "绥滨县",
            "value": "230422",
            "parentVal": "230400"
          },
          {
            "text": "市辖区",
            "value": "230501",
            "parentVal": "230500"
          },
          {
            "text": "尖山区",
            "value": "230502",
            "parentVal": "230500"
          },
          {
            "text": "岭东区",
            "value": "230503",
            "parentVal": "230500"
          },
          {
            "text": "四方台区",
            "value": "230505",
            "parentVal": "230500"
          },
          {
            "text": "宝山区",
            "value": "230506",
            "parentVal": "230500"
          },
          {
            "text": "集贤县",
            "value": "230521",
            "parentVal": "230500"
          },
          {
            "text": "友谊县",
            "value": "230522",
            "parentVal": "230500"
          },
          {
            "text": "宝清县",
            "value": "230523",
            "parentVal": "230500"
          },
          {
            "text": "饶河县",
            "value": "230524",
            "parentVal": "230500"
          },
          {
            "text": "市辖区",
            "value": "230601",
            "parentVal": "230600"
          },
          {
            "text": "萨尔图区",
            "value": "230602",
            "parentVal": "230600"
          },
          {
            "text": "龙凤区",
            "value": "230603",
            "parentVal": "230600"
          },
          {
            "text": "让胡路区",
            "value": "230604",
            "parentVal": "230600"
          },
          {
            "text": "红岗区",
            "value": "230605",
            "parentVal": "230600"
          },
          {
            "text": "大同区",
            "value": "230606",
            "parentVal": "230600"
          },
          {
            "text": "肇州县",
            "value": "230621",
            "parentVal": "230600"
          },
          {
            "text": "肇源县",
            "value": "230622",
            "parentVal": "230600"
          },
          {
            "text": "林甸县",
            "value": "230623",
            "parentVal": "230600"
          },
          {
            "text": "杜尔伯特蒙古族自治县",
            "value": "230624",
            "parentVal": "230600"
          },
          {
            "text": "市辖区",
            "value": "230701",
            "parentVal": "230700"
          },
          {
            "text": "伊春区",
            "value": "230702",
            "parentVal": "230700"
          },
          {
            "text": "南岔区",
            "value": "230703",
            "parentVal": "230700"
          },
          {
            "text": "友好区",
            "value": "230704",
            "parentVal": "230700"
          },
          {
            "text": "西林区",
            "value": "230705",
            "parentVal": "230700"
          },
          {
            "text": "翠峦区",
            "value": "230706",
            "parentVal": "230700"
          },
          {
            "text": "新青区",
            "value": "230707",
            "parentVal": "230700"
          },
          {
            "text": "美溪区",
            "value": "230708",
            "parentVal": "230700"
          },
          {
            "text": "金山屯区",
            "value": "230709",
            "parentVal": "230700"
          },
          {
            "text": "五营区",
            "value": "230710",
            "parentVal": "230700"
          },
          {
            "text": "乌马河区",
            "value": "230711",
            "parentVal": "230700"
          },
          {
            "text": "汤旺河区",
            "value": "230712",
            "parentVal": "230700"
          },
          {
            "text": "带岭区",
            "value": "230713",
            "parentVal": "230700"
          },
          {
            "text": "乌伊岭区",
            "value": "230714",
            "parentVal": "230700"
          },
          {
            "text": "红星区",
            "value": "230715",
            "parentVal": "230700"
          },
          {
            "text": "上甘岭区",
            "value": "230716",
            "parentVal": "230700"
          },
          {
            "text": "嘉荫县",
            "value": "230722",
            "parentVal": "230700"
          },
          {
            "text": "铁力市",
            "value": "230781",
            "parentVal": "230700"
          },
          {
            "text": "市辖区",
            "value": "230801",
            "parentVal": "230800"
          },
          {
            "text": "向阳区",
            "value": "230803",
            "parentVal": "230800"
          },
          {
            "text": "前进区",
            "value": "230804",
            "parentVal": "230800"
          },
          {
            "text": "东风区",
            "value": "230805",
            "parentVal": "230800"
          },
          {
            "text": "郊区",
            "value": "230811",
            "parentVal": "230800"
          },
          {
            "text": "桦南县",
            "value": "230822",
            "parentVal": "230800"
          },
          {
            "text": "桦川县",
            "value": "230826",
            "parentVal": "230800"
          },
          {
            "text": "汤原县",
            "value": "230828",
            "parentVal": "230800"
          },
          {
            "text": "抚远县",
            "value": "230833",
            "parentVal": "230800"
          },
          {
            "text": "同江市",
            "value": "230881",
            "parentVal": "230800"
          },
          {
            "text": "富锦市",
            "value": "230882",
            "parentVal": "230800"
          },
          {
            "text": "市辖区",
            "value": "230901",
            "parentVal": "230900"
          },
          {
            "text": "新兴区",
            "value": "230902",
            "parentVal": "230900"
          },
          {
            "text": "桃山区",
            "value": "230903",
            "parentVal": "230900"
          },
          {
            "text": "茄子河区",
            "value": "230904",
            "parentVal": "230900"
          },
          {
            "text": "勃利县",
            "value": "230921",
            "parentVal": "230900"
          },
          {
            "text": "市辖区",
            "value": "231001",
            "parentVal": "231000"
          },
          {
            "text": "东安区",
            "value": "231002",
            "parentVal": "231000"
          },
          {
            "text": "阳明区",
            "value": "231003",
            "parentVal": "231000"
          },
          {
            "text": "爱民区",
            "value": "231004",
            "parentVal": "231000"
          },
          {
            "text": "西安区",
            "value": "231005",
            "parentVal": "231000"
          },
          {
            "text": "东宁县",
            "value": "231024",
            "parentVal": "231000"
          },
          {
            "text": "林口县",
            "value": "231025",
            "parentVal": "231000"
          },
          {
            "text": "绥芬河市",
            "value": "231081",
            "parentVal": "231000"
          },
          {
            "text": "海林市",
            "value": "231083",
            "parentVal": "231000"
          },
          {
            "text": "宁安市",
            "value": "231084",
            "parentVal": "231000"
          },
          {
            "text": "穆棱市",
            "value": "231085",
            "parentVal": "231000"
          },
          {
            "text": "市辖区",
            "value": "231101",
            "parentVal": "231100"
          },
          {
            "text": "爱辉区",
            "value": "231102",
            "parentVal": "231100"
          },
          {
            "text": "嫩江县",
            "value": "231121",
            "parentVal": "231100"
          },
          {
            "text": "逊克县",
            "value": "231123",
            "parentVal": "231100"
          },
          {
            "text": "孙吴县",
            "value": "231124",
            "parentVal": "231100"
          },
          {
            "text": "北安市",
            "value": "231181",
            "parentVal": "231100"
          },
          {
            "text": "五大连池市",
            "value": "231182",
            "parentVal": "231100"
          },
          {
            "text": "市辖区",
            "value": "231201",
            "parentVal": "231200"
          },
          {
            "text": "北林区",
            "value": "231202",
            "parentVal": "231200"
          },
          {
            "text": "望奎县",
            "value": "231221",
            "parentVal": "231200"
          },
          {
            "text": "兰西县",
            "value": "231222",
            "parentVal": "231200"
          },
          {
            "text": "青冈县",
            "value": "231223",
            "parentVal": "231200"
          },
          {
            "text": "庆安县",
            "value": "231224",
            "parentVal": "231200"
          },
          {
            "text": "明水县",
            "value": "231225",
            "parentVal": "231200"
          },
          {
            "text": "绥棱县",
            "value": "231226",
            "parentVal": "231200"
          },
          {
            "text": "安达市",
            "value": "231281",
            "parentVal": "231200"
          },
          {
            "text": "肇东市",
            "value": "231282",
            "parentVal": "231200"
          },
          {
            "text": "海伦市",
            "value": "231283",
            "parentVal": "231200"
          },
          {
            "text": "呼玛县",
            "value": "232721",
            "parentVal": "232700"
          },
          {
            "text": "塔河县",
            "value": "232722",
            "parentVal": "232700"
          },
          {
            "text": "漠河县",
            "value": "232723",
            "parentVal": "232700"
          },
          {
            "text": "黄浦区",
            "value": "310101",
            "parentVal": "310100"
          },
          {
            "text": "徐汇区",
            "value": "310104",
            "parentVal": "310100"
          },
          {
            "text": "长宁区",
            "value": "310105",
            "parentVal": "310100"
          },
          {
            "text": "静安区",
            "value": "310106",
            "parentVal": "310100"
          },
          {
            "text": "普陀区",
            "value": "310107",
            "parentVal": "310100"
          },
          {
            "text": "闸北区",
            "value": "310108",
            "parentVal": "310100"
          },
          {
            "text": "虹口区",
            "value": "310109",
            "parentVal": "310100"
          },
          {
            "text": "杨浦区",
            "value": "310110",
            "parentVal": "310100"
          },
          {
            "text": "闵行区",
            "value": "310112",
            "parentVal": "310100"
          },
          {
            "text": "宝山区",
            "value": "310113",
            "parentVal": "310100"
          },
          {
            "text": "嘉定区",
            "value": "310114",
            "parentVal": "310100"
          },
          {
            "text": "浦东新区",
            "value": "310115",
            "parentVal": "310100"
          },
          {
            "text": "金山区",
            "value": "310116",
            "parentVal": "310100"
          },
          {
            "text": "松江区",
            "value": "310117",
            "parentVal": "310100"
          },
          {
            "text": "青浦区",
            "value": "310118",
            "parentVal": "310100"
          },
          {
            "text": "奉贤区",
            "value": "310120",
            "parentVal": "310100"
          },
          {
            "text": "崇明县",
            "value": "310230",
            "parentVal": "310200"
          },
          {
            "text": "市辖区",
            "value": "320101",
            "parentVal": "320100"
          },
          {
            "text": "玄武区",
            "value": "320102",
            "parentVal": "320100"
          },
          {
            "text": "秦淮区",
            "value": "320104",
            "parentVal": "320100"
          },
          {
            "text": "建邺区",
            "value": "320105",
            "parentVal": "320100"
          },
          {
            "text": "鼓楼区",
            "value": "320106",
            "parentVal": "320100"
          },
          {
            "text": "浦口区",
            "value": "320111",
            "parentVal": "320100"
          },
          {
            "text": "栖霞区",
            "value": "320113",
            "parentVal": "320100"
          },
          {
            "text": "雨花台区",
            "value": "320114",
            "parentVal": "320100"
          },
          {
            "text": "江宁区",
            "value": "320115",
            "parentVal": "320100"
          },
          {
            "text": "六合区",
            "value": "320116",
            "parentVal": "320100"
          },
          {
            "text": "溧水区",
            "value": "320117",
            "parentVal": "320100"
          },
          {
            "text": "高淳区",
            "value": "320118",
            "parentVal": "320100"
          },
          {
            "text": "市辖区",
            "value": "320201",
            "parentVal": "320200"
          },
          {
            "text": "崇安区",
            "value": "320202",
            "parentVal": "320200"
          },
          {
            "text": "南长区",
            "value": "320203",
            "parentVal": "320200"
          },
          {
            "text": "北塘区",
            "value": "320204",
            "parentVal": "320200"
          },
          {
            "text": "锡山区",
            "value": "320205",
            "parentVal": "320200"
          },
          {
            "text": "惠山区",
            "value": "320206",
            "parentVal": "320200"
          },
          {
            "text": "滨湖区",
            "value": "320211",
            "parentVal": "320200"
          },
          {
            "text": "江阴市",
            "value": "320281",
            "parentVal": "320200"
          },
          {
            "text": "宜兴市",
            "value": "320282",
            "parentVal": "320200"
          },
          {
            "text": "市辖区",
            "value": "320301",
            "parentVal": "320300"
          },
          {
            "text": "鼓楼区",
            "value": "320302",
            "parentVal": "320300"
          },
          {
            "text": "云龙区",
            "value": "320303",
            "parentVal": "320300"
          },
          {
            "text": "贾汪区",
            "value": "320305",
            "parentVal": "320300"
          },
          {
            "text": "泉山区",
            "value": "320311",
            "parentVal": "320300"
          },
          {
            "text": "铜山区",
            "value": "320312",
            "parentVal": "320300"
          },
          {
            "text": "丰县",
            "value": "320321",
            "parentVal": "320300"
          },
          {
            "text": "沛县",
            "value": "320322",
            "parentVal": "320300"
          },
          {
            "text": "睢宁县",
            "value": "320324",
            "parentVal": "320300"
          },
          {
            "text": "新沂市",
            "value": "320381",
            "parentVal": "320300"
          },
          {
            "text": "邳州市",
            "value": "320382",
            "parentVal": "320300"
          },
          {
            "text": "市辖区",
            "value": "320401",
            "parentVal": "320400"
          },
          {
            "text": "天宁区",
            "value": "320402",
            "parentVal": "320400"
          },
          {
            "text": "钟楼区",
            "value": "320404",
            "parentVal": "320400"
          },
          {
            "text": "戚墅堰区",
            "value": "320405",
            "parentVal": "320400"
          },
          {
            "text": "新北区",
            "value": "320411",
            "parentVal": "320400"
          },
          {
            "text": "武进区",
            "value": "320412",
            "parentVal": "320400"
          },
          {
            "text": "溧阳市",
            "value": "320481",
            "parentVal": "320400"
          },
          {
            "text": "金坛市",
            "value": "320482",
            "parentVal": "320400"
          },
          {
            "text": "市辖区",
            "value": "320501",
            "parentVal": "320500"
          },
          {
            "text": "虎丘区",
            "value": "320505",
            "parentVal": "320500"
          },
          {
            "text": "吴中区",
            "value": "320506",
            "parentVal": "320500"
          },
          {
            "text": "相城区",
            "value": "320507",
            "parentVal": "320500"
          },
          {
            "text": "姑苏区",
            "value": "320508",
            "parentVal": "320500"
          },
          {
            "text": "吴江区",
            "value": "320509",
            "parentVal": "320500"
          },
          {
            "text": "常熟市",
            "value": "320581",
            "parentVal": "320500"
          },
          {
            "text": "张家港市",
            "value": "320582",
            "parentVal": "320500"
          },
          {
            "text": "昆山市",
            "value": "320583",
            "parentVal": "320500"
          },
          {
            "text": "太仓市",
            "value": "320585",
            "parentVal": "320500"
          },
          {
            "text": "市辖区",
            "value": "320601",
            "parentVal": "320600"
          },
          {
            "text": "崇川区",
            "value": "320602",
            "parentVal": "320600"
          },
          {
            "text": "港闸区",
            "value": "320611",
            "parentVal": "320600"
          },
          {
            "text": "通州区",
            "value": "320612",
            "parentVal": "320600"
          },
          {
            "text": "海安县",
            "value": "320621",
            "parentVal": "320600"
          },
          {
            "text": "如东县",
            "value": "320623",
            "parentVal": "320600"
          },
          {
            "text": "启东市",
            "value": "320681",
            "parentVal": "320600"
          },
          {
            "text": "如皋市",
            "value": "320682",
            "parentVal": "320600"
          },
          {
            "text": "海门市",
            "value": "320684",
            "parentVal": "320600"
          },
          {
            "text": "市辖区",
            "value": "320701",
            "parentVal": "320700"
          },
          {
            "text": "连云区",
            "value": "320703",
            "parentVal": "320700"
          },
          {
            "text": "新浦区",
            "value": "320705",
            "parentVal": "320700"
          },
          {
            "text": "海州区",
            "value": "320706",
            "parentVal": "320700"
          },
          {
            "text": "赣榆县",
            "value": "320721",
            "parentVal": "320700"
          },
          {
            "text": "东海县",
            "value": "320722",
            "parentVal": "320700"
          },
          {
            "text": "灌云县",
            "value": "320723",
            "parentVal": "320700"
          },
          {
            "text": "灌南县",
            "value": "320724",
            "parentVal": "320700"
          },
          {
            "text": "市辖区",
            "value": "320801",
            "parentVal": "320800"
          },
          {
            "text": "清河区",
            "value": "320802",
            "parentVal": "320800"
          },
          {
            "text": "淮安区",
            "value": "320803",
            "parentVal": "320800"
          },
          {
            "text": "淮阴区",
            "value": "320804",
            "parentVal": "320800"
          },
          {
            "text": "清浦区",
            "value": "320811",
            "parentVal": "320800"
          },
          {
            "text": "涟水县",
            "value": "320826",
            "parentVal": "320800"
          },
          {
            "text": "洪泽县",
            "value": "320829",
            "parentVal": "320800"
          },
          {
            "text": "盱眙县",
            "value": "320830",
            "parentVal": "320800"
          },
          {
            "text": "金湖县",
            "value": "320831",
            "parentVal": "320800"
          },
          {
            "text": "市辖区",
            "value": "320901",
            "parentVal": "320900"
          },
          {
            "text": "亭湖区",
            "value": "320902",
            "parentVal": "320900"
          },
          {
            "text": "盐都区",
            "value": "320903",
            "parentVal": "320900"
          },
          {
            "text": "响水县",
            "value": "320921",
            "parentVal": "320900"
          },
          {
            "text": "滨海县",
            "value": "320922",
            "parentVal": "320900"
          },
          {
            "text": "阜宁县",
            "value": "320923",
            "parentVal": "320900"
          },
          {
            "text": "射阳县",
            "value": "320924",
            "parentVal": "320900"
          },
          {
            "text": "建湖县",
            "value": "320925",
            "parentVal": "320900"
          },
          {
            "text": "东台市",
            "value": "320981",
            "parentVal": "320900"
          },
          {
            "text": "大丰市",
            "value": "320982",
            "parentVal": "320900"
          },
          {
            "text": "市辖区",
            "value": "321001",
            "parentVal": "321000"
          },
          {
            "text": "广陵区",
            "value": "321002",
            "parentVal": "321000"
          },
          {
            "text": "邗江区",
            "value": "321003",
            "parentVal": "321000"
          },
          {
            "text": "江都区",
            "value": "321012",
            "parentVal": "321000"
          },
          {
            "text": "宝应县",
            "value": "321023",
            "parentVal": "321000"
          },
          {
            "text": "仪征市",
            "value": "321081",
            "parentVal": "321000"
          },
          {
            "text": "高邮市",
            "value": "321084",
            "parentVal": "321000"
          },
          {
            "text": "市辖区",
            "value": "321101",
            "parentVal": "321100"
          },
          {
            "text": "京口区",
            "value": "321102",
            "parentVal": "321100"
          },
          {
            "text": "润州区",
            "value": "321111",
            "parentVal": "321100"
          },
          {
            "text": "丹徒区",
            "value": "321112",
            "parentVal": "321100"
          },
          {
            "text": "丹阳市",
            "value": "321181",
            "parentVal": "321100"
          },
          {
            "text": "扬中市",
            "value": "321182",
            "parentVal": "321100"
          },
          {
            "text": "句容市",
            "value": "321183",
            "parentVal": "321100"
          },
          {
            "text": "市辖区",
            "value": "321201",
            "parentVal": "321200"
          },
          {
            "text": "海陵区",
            "value": "321202",
            "parentVal": "321200"
          },
          {
            "text": "高港区",
            "value": "321203",
            "parentVal": "321200"
          },
          {
            "text": "姜堰区",
            "value": "321204",
            "parentVal": "321200"
          },
          {
            "text": "兴化市",
            "value": "321281",
            "parentVal": "321200"
          },
          {
            "text": "靖江市",
            "value": "321282",
            "parentVal": "321200"
          },
          {
            "text": "泰兴市",
            "value": "321283",
            "parentVal": "321200"
          },
          {
            "text": "市辖区",
            "value": "321301",
            "parentVal": "321300"
          },
          {
            "text": "宿城区",
            "value": "321302",
            "parentVal": "321300"
          },
          {
            "text": "宿豫区",
            "value": "321311",
            "parentVal": "321300"
          },
          {
            "text": "沭阳县",
            "value": "321322",
            "parentVal": "321300"
          },
          {
            "text": "泗阳县",
            "value": "321323",
            "parentVal": "321300"
          },
          {
            "text": "泗洪县",
            "value": "321324",
            "parentVal": "321300"
          },
          {
            "text": "市辖区",
            "value": "330101",
            "parentVal": "330100"
          },
          {
            "text": "上城区",
            "value": "330102",
            "parentVal": "330100"
          },
          {
            "text": "下城区",
            "value": "330103",
            "parentVal": "330100"
          },
          {
            "text": "江干区",
            "value": "330104",
            "parentVal": "330100"
          },
          {
            "text": "拱墅区",
            "value": "330105",
            "parentVal": "330100"
          },
          {
            "text": "西湖区",
            "value": "330106",
            "parentVal": "330100"
          },
          {
            "text": "滨江区",
            "value": "330108",
            "parentVal": "330100"
          },
          {
            "text": "萧山区",
            "value": "330109",
            "parentVal": "330100"
          },
          {
            "text": "余杭区",
            "value": "330110",
            "parentVal": "330100"
          },
          {
            "text": "桐庐县",
            "value": "330122",
            "parentVal": "330100"
          },
          {
            "text": "淳安县",
            "value": "330127",
            "parentVal": "330100"
          },
          {
            "text": "建德市",
            "value": "330182",
            "parentVal": "330100"
          },
          {
            "text": "富阳市",
            "value": "330183",
            "parentVal": "330100"
          },
          {
            "text": "临安市",
            "value": "330185",
            "parentVal": "330100"
          },
          {
            "text": "市辖区",
            "value": "330201",
            "parentVal": "330200"
          },
          {
            "text": "海曙区",
            "value": "330203",
            "parentVal": "330200"
          },
          {
            "text": "江东区",
            "value": "330204",
            "parentVal": "330200"
          },
          {
            "text": "江北区",
            "value": "330205",
            "parentVal": "330200"
          },
          {
            "text": "北仑区",
            "value": "330206",
            "parentVal": "330200"
          },
          {
            "text": "镇海区",
            "value": "330211",
            "parentVal": "330200"
          },
          {
            "text": "鄞州区",
            "value": "330212",
            "parentVal": "330200"
          },
          {
            "text": "象山县",
            "value": "330225",
            "parentVal": "330200"
          },
          {
            "text": "宁海县",
            "value": "330226",
            "parentVal": "330200"
          },
          {
            "text": "余姚市",
            "value": "330281",
            "parentVal": "330200"
          },
          {
            "text": "慈溪市",
            "value": "330282",
            "parentVal": "330200"
          },
          {
            "text": "奉化市",
            "value": "330283",
            "parentVal": "330200"
          },
          {
            "text": "市辖区",
            "value": "330301",
            "parentVal": "330300"
          },
          {
            "text": "鹿城区",
            "value": "330302",
            "parentVal": "330300"
          },
          {
            "text": "龙湾区",
            "value": "330303",
            "parentVal": "330300"
          },
          {
            "text": "瓯海区",
            "value": "330304",
            "parentVal": "330300"
          },
          {
            "text": "洞头县",
            "value": "330322",
            "parentVal": "330300"
          },
          {
            "text": "永嘉县",
            "value": "330324",
            "parentVal": "330300"
          },
          {
            "text": "平阳县",
            "value": "330326",
            "parentVal": "330300"
          },
          {
            "text": "苍南县",
            "value": "330327",
            "parentVal": "330300"
          },
          {
            "text": "文成县",
            "value": "330328",
            "parentVal": "330300"
          },
          {
            "text": "泰顺县",
            "value": "330329",
            "parentVal": "330300"
          },
          {
            "text": "瑞安市",
            "value": "330381",
            "parentVal": "330300"
          },
          {
            "text": "乐清市",
            "value": "330382",
            "parentVal": "330300"
          },
          {
            "text": "市辖区",
            "value": "330401",
            "parentVal": "330400"
          },
          {
            "text": "南湖区",
            "value": "330402",
            "parentVal": "330400"
          },
          {
            "text": "秀洲区",
            "value": "330411",
            "parentVal": "330400"
          },
          {
            "text": "嘉善县",
            "value": "330421",
            "parentVal": "330400"
          },
          {
            "text": "海盐县",
            "value": "330424",
            "parentVal": "330400"
          },
          {
            "text": "海宁市",
            "value": "330481",
            "parentVal": "330400"
          },
          {
            "text": "平湖市",
            "value": "330482",
            "parentVal": "330400"
          },
          {
            "text": "桐乡市",
            "value": "330483",
            "parentVal": "330400"
          },
          {
            "text": "市辖区",
            "value": "330501",
            "parentVal": "330500"
          },
          {
            "text": "吴兴区",
            "value": "330502",
            "parentVal": "330500"
          },
          {
            "text": "南浔区",
            "value": "330503",
            "parentVal": "330500"
          },
          {
            "text": "德清县",
            "value": "330521",
            "parentVal": "330500"
          },
          {
            "text": "长兴县",
            "value": "330522",
            "parentVal": "330500"
          },
          {
            "text": "安吉县",
            "value": "330523",
            "parentVal": "330500"
          },
          {
            "text": "市辖区",
            "value": "330601",
            "parentVal": "330600"
          },
          {
            "text": "越城区",
            "value": "330602",
            "parentVal": "330600"
          },
          {
            "text": "绍兴县",
            "value": "330621",
            "parentVal": "330600"
          },
          {
            "text": "新昌县",
            "value": "330624",
            "parentVal": "330600"
          },
          {
            "text": "诸暨市",
            "value": "330681",
            "parentVal": "330600"
          },
          {
            "text": "上虞市",
            "value": "330682",
            "parentVal": "330600"
          },
          {
            "text": "嵊州市",
            "value": "330683",
            "parentVal": "330600"
          },
          {
            "text": "市辖区",
            "value": "330701",
            "parentVal": "330700"
          },
          {
            "text": "婺城区",
            "value": "330702",
            "parentVal": "330700"
          },
          {
            "text": "金东区",
            "value": "330703",
            "parentVal": "330700"
          },
          {
            "text": "武义县",
            "value": "330723",
            "parentVal": "330700"
          },
          {
            "text": "浦江县",
            "value": "330726",
            "parentVal": "330700"
          },
          {
            "text": "磐安县",
            "value": "330727",
            "parentVal": "330700"
          },
          {
            "text": "兰溪市",
            "value": "330781",
            "parentVal": "330700"
          },
          {
            "text": "义乌市",
            "value": "330782",
            "parentVal": "330700"
          },
          {
            "text": "东阳市",
            "value": "330783",
            "parentVal": "330700"
          },
          {
            "text": "永康市",
            "value": "330784",
            "parentVal": "330700"
          },
          {
            "text": "市辖区",
            "value": "330801",
            "parentVal": "330800"
          },
          {
            "text": "柯城区",
            "value": "330802",
            "parentVal": "330800"
          },
          {
            "text": "衢江区",
            "value": "330803",
            "parentVal": "330800"
          },
          {
            "text": "常山县",
            "value": "330822",
            "parentVal": "330800"
          },
          {
            "text": "开化县",
            "value": "330824",
            "parentVal": "330800"
          },
          {
            "text": "龙游县",
            "value": "330825",
            "parentVal": "330800"
          },
          {
            "text": "江山市",
            "value": "330881",
            "parentVal": "330800"
          },
          {
            "text": "市辖区",
            "value": "330901",
            "parentVal": "330900"
          },
          {
            "text": "定海区",
            "value": "330902",
            "parentVal": "330900"
          },
          {
            "text": "普陀区",
            "value": "330903",
            "parentVal": "330900"
          },
          {
            "text": "岱山县",
            "value": "330921",
            "parentVal": "330900"
          },
          {
            "text": "嵊泗县",
            "value": "330922",
            "parentVal": "330900"
          },
          {
            "text": "市辖区",
            "value": "331001",
            "parentVal": "331000"
          },
          {
            "text": "椒江区",
            "value": "331002",
            "parentVal": "331000"
          },
          {
            "text": "黄岩区",
            "value": "331003",
            "parentVal": "331000"
          },
          {
            "text": "路桥区",
            "value": "331004",
            "parentVal": "331000"
          },
          {
            "text": "玉环县",
            "value": "331021",
            "parentVal": "331000"
          },
          {
            "text": "三门县",
            "value": "331022",
            "parentVal": "331000"
          },
          {
            "text": "天台县",
            "value": "331023",
            "parentVal": "331000"
          },
          {
            "text": "仙居县",
            "value": "331024",
            "parentVal": "331000"
          },
          {
            "text": "温岭市",
            "value": "331081",
            "parentVal": "331000"
          },
          {
            "text": "临海市",
            "value": "331082",
            "parentVal": "331000"
          },
          {
            "text": "市辖区",
            "value": "331101",
            "parentVal": "331100"
          },
          {
            "text": "莲都区",
            "value": "331102",
            "parentVal": "331100"
          },
          {
            "text": "青田县",
            "value": "331121",
            "parentVal": "331100"
          },
          {
            "text": "缙云县",
            "value": "331122",
            "parentVal": "331100"
          },
          {
            "text": "遂昌县",
            "value": "331123",
            "parentVal": "331100"
          },
          {
            "text": "松阳县",
            "value": "331124",
            "parentVal": "331100"
          },
          {
            "text": "云和县",
            "value": "331125",
            "parentVal": "331100"
          },
          {
            "text": "庆元县",
            "value": "331126",
            "parentVal": "331100"
          },
          {
            "text": "景宁畲族自治县",
            "value": "331127",
            "parentVal": "331100"
          },
          {
            "text": "龙泉市",
            "value": "331181",
            "parentVal": "331100"
          },
          {
            "text": "市辖区",
            "value": "340101",
            "parentVal": "340100"
          },
          {
            "text": "瑶海区",
            "value": "340102",
            "parentVal": "340100"
          },
          {
            "text": "庐阳区",
            "value": "340103",
            "parentVal": "340100"
          },
          {
            "text": "蜀山区",
            "value": "340104",
            "parentVal": "340100"
          },
          {
            "text": "包河区",
            "value": "340111",
            "parentVal": "340100"
          },
          {
            "text": "长丰县",
            "value": "340121",
            "parentVal": "340100"
          },
          {
            "text": "肥东县",
            "value": "340122",
            "parentVal": "340100"
          },
          {
            "text": "肥西县",
            "value": "340123",
            "parentVal": "340100"
          },
          {
            "text": "庐江县",
            "value": "340124",
            "parentVal": "340100"
          },
          {
            "text": "巢湖市",
            "value": "340181",
            "parentVal": "340100"
          },
          {
            "text": "市辖区",
            "value": "340201",
            "parentVal": "340200"
          },
          {
            "text": "镜湖区",
            "value": "340202",
            "parentVal": "340200"
          },
          {
            "text": "弋江区",
            "value": "340203",
            "parentVal": "340200"
          },
          {
            "text": "鸠江区",
            "value": "340207",
            "parentVal": "340200"
          },
          {
            "text": "三山区",
            "value": "340208",
            "parentVal": "340200"
          },
          {
            "text": "芜湖县",
            "value": "340221",
            "parentVal": "340200"
          },
          {
            "text": "繁昌县",
            "value": "340222",
            "parentVal": "340200"
          },
          {
            "text": "南陵县",
            "value": "340223",
            "parentVal": "340200"
          },
          {
            "text": "无为县",
            "value": "340225",
            "parentVal": "340200"
          },
          {
            "text": "市辖区",
            "value": "340301",
            "parentVal": "340300"
          },
          {
            "text": "龙子湖区",
            "value": "340302",
            "parentVal": "340300"
          },
          {
            "text": "蚌山区",
            "value": "340303",
            "parentVal": "340300"
          },
          {
            "text": "禹会区",
            "value": "340304",
            "parentVal": "340300"
          },
          {
            "text": "淮上区",
            "value": "340311",
            "parentVal": "340300"
          },
          {
            "text": "怀远县",
            "value": "340321",
            "parentVal": "340300"
          },
          {
            "text": "五河县",
            "value": "340322",
            "parentVal": "340300"
          },
          {
            "text": "固镇县",
            "value": "340323",
            "parentVal": "340300"
          },
          {
            "text": "市辖区",
            "value": "340401",
            "parentVal": "340400"
          },
          {
            "text": "大通区",
            "value": "340402",
            "parentVal": "340400"
          },
          {
            "text": "田家庵区",
            "value": "340403",
            "parentVal": "340400"
          },
          {
            "text": "谢家集区",
            "value": "340404",
            "parentVal": "340400"
          },
          {
            "text": "八公山区",
            "value": "340405",
            "parentVal": "340400"
          },
          {
            "text": "潘集区",
            "value": "340406",
            "parentVal": "340400"
          },
          {
            "text": "凤台县",
            "value": "340421",
            "parentVal": "340400"
          },
          {
            "text": "市辖区",
            "value": "340501",
            "parentVal": "340500"
          },
          {
            "text": "花山区",
            "value": "340503",
            "parentVal": "340500"
          },
          {
            "text": "雨山区",
            "value": "340504",
            "parentVal": "340500"
          },
          {
            "text": "博望区",
            "value": "340506",
            "parentVal": "340500"
          },
          {
            "text": "当涂县",
            "value": "340521",
            "parentVal": "340500"
          },
          {
            "text": "含山县",
            "value": "340522",
            "parentVal": "340500"
          },
          {
            "text": "和县",
            "value": "340523",
            "parentVal": "340500"
          },
          {
            "text": "市辖区",
            "value": "340601",
            "parentVal": "340600"
          },
          {
            "text": "杜集区",
            "value": "340602",
            "parentVal": "340600"
          },
          {
            "text": "相山区",
            "value": "340603",
            "parentVal": "340600"
          },
          {
            "text": "烈山区",
            "value": "340604",
            "parentVal": "340600"
          },
          {
            "text": "濉溪县",
            "value": "340621",
            "parentVal": "340600"
          },
          {
            "text": "市辖区",
            "value": "340701",
            "parentVal": "340700"
          },
          {
            "text": "铜官山区",
            "value": "340702",
            "parentVal": "340700"
          },
          {
            "text": "狮子山区",
            "value": "340703",
            "parentVal": "340700"
          },
          {
            "text": "郊区",
            "value": "340711",
            "parentVal": "340700"
          },
          {
            "text": "铜陵县",
            "value": "340721",
            "parentVal": "340700"
          },
          {
            "text": "市辖区",
            "value": "340801",
            "parentVal": "340800"
          },
          {
            "text": "迎江区",
            "value": "340802",
            "parentVal": "340800"
          },
          {
            "text": "大观区",
            "value": "340803",
            "parentVal": "340800"
          },
          {
            "text": "宜秀区",
            "value": "340811",
            "parentVal": "340800"
          },
          {
            "text": "怀宁县",
            "value": "340822",
            "parentVal": "340800"
          },
          {
            "text": "枞阳县",
            "value": "340823",
            "parentVal": "340800"
          },
          {
            "text": "潜山县",
            "value": "340824",
            "parentVal": "340800"
          },
          {
            "text": "太湖县",
            "value": "340825",
            "parentVal": "340800"
          },
          {
            "text": "宿松县",
            "value": "340826",
            "parentVal": "340800"
          },
          {
            "text": "望江县",
            "value": "340827",
            "parentVal": "340800"
          },
          {
            "text": "岳西县",
            "value": "340828",
            "parentVal": "340800"
          },
          {
            "text": "桐城市",
            "value": "340881",
            "parentVal": "340800"
          },
          {
            "text": "市辖区",
            "value": "341001",
            "parentVal": "341000"
          },
          {
            "text": "屯溪区",
            "value": "341002",
            "parentVal": "341000"
          },
          {
            "text": "黄山区",
            "value": "341003",
            "parentVal": "341000"
          },
          {
            "text": "徽州区",
            "value": "341004",
            "parentVal": "341000"
          },
          {
            "text": "歙县",
            "value": "341021",
            "parentVal": "341000"
          },
          {
            "text": "休宁县",
            "value": "341022",
            "parentVal": "341000"
          },
          {
            "text": "黟县",
            "value": "341023",
            "parentVal": "341000"
          },
          {
            "text": "祁门县",
            "value": "341024",
            "parentVal": "341000"
          },
          {
            "text": "市辖区",
            "value": "341101",
            "parentVal": "341100"
          },
          {
            "text": "琅琊区",
            "value": "341102",
            "parentVal": "341100"
          },
          {
            "text": "南谯区",
            "value": "341103",
            "parentVal": "341100"
          },
          {
            "text": "来安县",
            "value": "341122",
            "parentVal": "341100"
          },
          {
            "text": "全椒县",
            "value": "341124",
            "parentVal": "341100"
          },
          {
            "text": "定远县",
            "value": "341125",
            "parentVal": "341100"
          },
          {
            "text": "凤阳县",
            "value": "341126",
            "parentVal": "341100"
          },
          {
            "text": "天长市",
            "value": "341181",
            "parentVal": "341100"
          },
          {
            "text": "明光市",
            "value": "341182",
            "parentVal": "341100"
          },
          {
            "text": "市辖区",
            "value": "341201",
            "parentVal": "341200"
          },
          {
            "text": "颍州区",
            "value": "341202",
            "parentVal": "341200"
          },
          {
            "text": "颍东区",
            "value": "341203",
            "parentVal": "341200"
          },
          {
            "text": "颍泉区",
            "value": "341204",
            "parentVal": "341200"
          },
          {
            "text": "临泉县",
            "value": "341221",
            "parentVal": "341200"
          },
          {
            "text": "太和县",
            "value": "341222",
            "parentVal": "341200"
          },
          {
            "text": "阜南县",
            "value": "341225",
            "parentVal": "341200"
          },
          {
            "text": "颍上县",
            "value": "341226",
            "parentVal": "341200"
          },
          {
            "text": "界首市",
            "value": "341282",
            "parentVal": "341200"
          },
          {
            "text": "市辖区",
            "value": "341301",
            "parentVal": "341300"
          },
          {
            "text": "埇桥区",
            "value": "341302",
            "parentVal": "341300"
          },
          {
            "text": "砀山县",
            "value": "341321",
            "parentVal": "341300"
          },
          {
            "text": "萧县",
            "value": "341322",
            "parentVal": "341300"
          },
          {
            "text": "灵璧县",
            "value": "341323",
            "parentVal": "341300"
          },
          {
            "text": "泗县",
            "value": "341324",
            "parentVal": "341300"
          },
          {
            "text": "市辖区",
            "value": "341501",
            "parentVal": "341500"
          },
          {
            "text": "金安区",
            "value": "341502",
            "parentVal": "341500"
          },
          {
            "text": "裕安区",
            "value": "341503",
            "parentVal": "341500"
          },
          {
            "text": "寿县",
            "value": "341521",
            "parentVal": "341500"
          },
          {
            "text": "霍邱县",
            "value": "341522",
            "parentVal": "341500"
          },
          {
            "text": "舒城县",
            "value": "341523",
            "parentVal": "341500"
          },
          {
            "text": "金寨县",
            "value": "341524",
            "parentVal": "341500"
          },
          {
            "text": "霍山县",
            "value": "341525",
            "parentVal": "341500"
          },
          {
            "text": "市辖区",
            "value": "341601",
            "parentVal": "341600"
          },
          {
            "text": "谯城区",
            "value": "341602",
            "parentVal": "341600"
          },
          {
            "text": "涡阳县",
            "value": "341621",
            "parentVal": "341600"
          },
          {
            "text": "蒙城县",
            "value": "341622",
            "parentVal": "341600"
          },
          {
            "text": "利辛县",
            "value": "341623",
            "parentVal": "341600"
          },
          {
            "text": "市辖区",
            "value": "341701",
            "parentVal": "341700"
          },
          {
            "text": "贵池区",
            "value": "341702",
            "parentVal": "341700"
          },
          {
            "text": "东至县",
            "value": "341721",
            "parentVal": "341700"
          },
          {
            "text": "石台县",
            "value": "341722",
            "parentVal": "341700"
          },
          {
            "text": "青阳县",
            "value": "341723",
            "parentVal": "341700"
          },
          {
            "text": "市辖区",
            "value": "341801",
            "parentVal": "341800"
          },
          {
            "text": "宣州区",
            "value": "341802",
            "parentVal": "341800"
          },
          {
            "text": "郎溪县",
            "value": "341821",
            "parentVal": "341800"
          },
          {
            "text": "广德县",
            "value": "341822",
            "parentVal": "341800"
          },
          {
            "text": "泾县",
            "value": "341823",
            "parentVal": "341800"
          },
          {
            "text": "绩溪县",
            "value": "341824",
            "parentVal": "341800"
          },
          {
            "text": "旌德县",
            "value": "341825",
            "parentVal": "341800"
          },
          {
            "text": "宁国市",
            "value": "341881",
            "parentVal": "341800"
          },
          {
            "text": "市辖区",
            "value": "350101",
            "parentVal": "350100"
          },
          {
            "text": "鼓楼区",
            "value": "350102",
            "parentVal": "350100"
          },
          {
            "text": "台江区",
            "value": "350103",
            "parentVal": "350100"
          },
          {
            "text": "仓山区",
            "value": "350104",
            "parentVal": "350100"
          },
          {
            "text": "马尾区",
            "value": "350105",
            "parentVal": "350100"
          },
          {
            "text": "晋安区",
            "value": "350111",
            "parentVal": "350100"
          },
          {
            "text": "闽侯县",
            "value": "350121",
            "parentVal": "350100"
          },
          {
            "text": "连江县",
            "value": "350122",
            "parentVal": "350100"
          },
          {
            "text": "罗源县",
            "value": "350123",
            "parentVal": "350100"
          },
          {
            "text": "闽清县",
            "value": "350124",
            "parentVal": "350100"
          },
          {
            "text": "永泰县",
            "value": "350125",
            "parentVal": "350100"
          },
          {
            "text": "平潭县",
            "value": "350128",
            "parentVal": "350100"
          },
          {
            "text": "福清市",
            "value": "350181",
            "parentVal": "350100"
          },
          {
            "text": "长乐市",
            "value": "350182",
            "parentVal": "350100"
          },
          {
            "text": "市辖区",
            "value": "350201",
            "parentVal": "350200"
          },
          {
            "text": "思明区",
            "value": "350203",
            "parentVal": "350200"
          },
          {
            "text": "海沧区",
            "value": "350205",
            "parentVal": "350200"
          },
          {
            "text": "湖里区",
            "value": "350206",
            "parentVal": "350200"
          },
          {
            "text": "集美区",
            "value": "350211",
            "parentVal": "350200"
          },
          {
            "text": "同安区",
            "value": "350212",
            "parentVal": "350200"
          },
          {
            "text": "翔安区",
            "value": "350213",
            "parentVal": "350200"
          },
          {
            "text": "市辖区",
            "value": "350301",
            "parentVal": "350300"
          },
          {
            "text": "城厢区",
            "value": "350302",
            "parentVal": "350300"
          },
          {
            "text": "涵江区",
            "value": "350303",
            "parentVal": "350300"
          },
          {
            "text": "荔城区",
            "value": "350304",
            "parentVal": "350300"
          },
          {
            "text": "秀屿区",
            "value": "350305",
            "parentVal": "350300"
          },
          {
            "text": "仙游县",
            "value": "350322",
            "parentVal": "350300"
          },
          {
            "text": "市辖区",
            "value": "350401",
            "parentVal": "350400"
          },
          {
            "text": "梅列区",
            "value": "350402",
            "parentVal": "350400"
          },
          {
            "text": "三元区",
            "value": "350403",
            "parentVal": "350400"
          },
          {
            "text": "明溪县",
            "value": "350421",
            "parentVal": "350400"
          },
          {
            "text": "清流县",
            "value": "350423",
            "parentVal": "350400"
          },
          {
            "text": "宁化县",
            "value": "350424",
            "parentVal": "350400"
          },
          {
            "text": "大田县",
            "value": "350425",
            "parentVal": "350400"
          },
          {
            "text": "尤溪县",
            "value": "350426",
            "parentVal": "350400"
          },
          {
            "text": "沙县",
            "value": "350427",
            "parentVal": "350400"
          },
          {
            "text": "将乐县",
            "value": "350428",
            "parentVal": "350400"
          },
          {
            "text": "泰宁县",
            "value": "350429",
            "parentVal": "350400"
          },
          {
            "text": "建宁县",
            "value": "350430",
            "parentVal": "350400"
          },
          {
            "text": "永安市",
            "value": "350481",
            "parentVal": "350400"
          },
          {
            "text": "市辖区",
            "value": "350501",
            "parentVal": "350500"
          },
          {
            "text": "鲤城区",
            "value": "350502",
            "parentVal": "350500"
          },
          {
            "text": "丰泽区",
            "value": "350503",
            "parentVal": "350500"
          },
          {
            "text": "洛江区",
            "value": "350504",
            "parentVal": "350500"
          },
          {
            "text": "泉港区",
            "value": "350505",
            "parentVal": "350500"
          },
          {
            "text": "惠安县",
            "value": "350521",
            "parentVal": "350500"
          },
          {
            "text": "安溪县",
            "value": "350524",
            "parentVal": "350500"
          },
          {
            "text": "永春县",
            "value": "350525",
            "parentVal": "350500"
          },
          {
            "text": "德化县",
            "value": "350526",
            "parentVal": "350500"
          },
          {
            "text": "金门县",
            "value": "350527",
            "parentVal": "350500"
          },
          {
            "text": "石狮市",
            "value": "350581",
            "parentVal": "350500"
          },
          {
            "text": "晋江市",
            "value": "350582",
            "parentVal": "350500"
          },
          {
            "text": "南安市",
            "value": "350583",
            "parentVal": "350500"
          },
          {
            "text": "市辖区",
            "value": "350601",
            "parentVal": "350600"
          },
          {
            "text": "芗城区",
            "value": "350602",
            "parentVal": "350600"
          },
          {
            "text": "龙文区",
            "value": "350603",
            "parentVal": "350600"
          },
          {
            "text": "云霄县",
            "value": "350622",
            "parentVal": "350600"
          },
          {
            "text": "漳浦县",
            "value": "350623",
            "parentVal": "350600"
          },
          {
            "text": "诏安县",
            "value": "350624",
            "parentVal": "350600"
          },
          {
            "text": "长泰县",
            "value": "350625",
            "parentVal": "350600"
          },
          {
            "text": "东山县",
            "value": "350626",
            "parentVal": "350600"
          },
          {
            "text": "南靖县",
            "value": "350627",
            "parentVal": "350600"
          },
          {
            "text": "平和县",
            "value": "350628",
            "parentVal": "350600"
          },
          {
            "text": "华安县",
            "value": "350629",
            "parentVal": "350600"
          },
          {
            "text": "龙海市",
            "value": "350681",
            "parentVal": "350600"
          },
          {
            "text": "市辖区",
            "value": "350701",
            "parentVal": "350700"
          },
          {
            "text": "延平区",
            "value": "350702",
            "parentVal": "350700"
          },
          {
            "text": "顺昌县",
            "value": "350721",
            "parentVal": "350700"
          },
          {
            "text": "浦城县",
            "value": "350722",
            "parentVal": "350700"
          },
          {
            "text": "光泽县",
            "value": "350723",
            "parentVal": "350700"
          },
          {
            "text": "松溪县",
            "value": "350724",
            "parentVal": "350700"
          },
          {
            "text": "政和县",
            "value": "350725",
            "parentVal": "350700"
          },
          {
            "text": "邵武市",
            "value": "350781",
            "parentVal": "350700"
          },
          {
            "text": "武夷山市",
            "value": "350782",
            "parentVal": "350700"
          },
          {
            "text": "建瓯市",
            "value": "350783",
            "parentVal": "350700"
          },
          {
            "text": "建阳市",
            "value": "350784",
            "parentVal": "350700"
          },
          {
            "text": "市辖区",
            "value": "350801",
            "parentVal": "350800"
          },
          {
            "text": "新罗区",
            "value": "350802",
            "parentVal": "350800"
          },
          {
            "text": "长汀县",
            "value": "350821",
            "parentVal": "350800"
          },
          {
            "text": "永定县",
            "value": "350822",
            "parentVal": "350800"
          },
          {
            "text": "上杭县",
            "value": "350823",
            "parentVal": "350800"
          },
          {
            "text": "武平县",
            "value": "350824",
            "parentVal": "350800"
          },
          {
            "text": "连城县",
            "value": "350825",
            "parentVal": "350800"
          },
          {
            "text": "漳平市",
            "value": "350881",
            "parentVal": "350800"
          },
          {
            "text": "市辖区",
            "value": "350901",
            "parentVal": "350900"
          },
          {
            "text": "蕉城区",
            "value": "350902",
            "parentVal": "350900"
          },
          {
            "text": "霞浦县",
            "value": "350921",
            "parentVal": "350900"
          },
          {
            "text": "古田县",
            "value": "350922",
            "parentVal": "350900"
          },
          {
            "text": "屏南县",
            "value": "350923",
            "parentVal": "350900"
          },
          {
            "text": "寿宁县",
            "value": "350924",
            "parentVal": "350900"
          },
          {
            "text": "周宁县",
            "value": "350925",
            "parentVal": "350900"
          },
          {
            "text": "柘荣县",
            "value": "350926",
            "parentVal": "350900"
          },
          {
            "text": "福安市",
            "value": "350981",
            "parentVal": "350900"
          },
          {
            "text": "福鼎市",
            "value": "350982",
            "parentVal": "350900"
          },
          {
            "text": "市辖区",
            "value": "360101",
            "parentVal": "360100"
          },
          {
            "text": "东湖区",
            "value": "360102",
            "parentVal": "360100"
          },
          {
            "text": "西湖区",
            "value": "360103",
            "parentVal": "360100"
          },
          {
            "text": "青云谱区",
            "value": "360104",
            "parentVal": "360100"
          },
          {
            "text": "湾里区",
            "value": "360105",
            "parentVal": "360100"
          },
          {
            "text": "青山湖区",
            "value": "360111",
            "parentVal": "360100"
          },
          {
            "text": "南昌县",
            "value": "360121",
            "parentVal": "360100"
          },
          {
            "text": "新建县",
            "value": "360122",
            "parentVal": "360100"
          },
          {
            "text": "安义县",
            "value": "360123",
            "parentVal": "360100"
          },
          {
            "text": "进贤县",
            "value": "360124",
            "parentVal": "360100"
          },
          {
            "text": "市辖区",
            "value": "360201",
            "parentVal": "360200"
          },
          {
            "text": "昌江区",
            "value": "360202",
            "parentVal": "360200"
          },
          {
            "text": "珠山区",
            "value": "360203",
            "parentVal": "360200"
          },
          {
            "text": "浮梁县",
            "value": "360222",
            "parentVal": "360200"
          },
          {
            "text": "乐平市",
            "value": "360281",
            "parentVal": "360200"
          },
          {
            "text": "市辖区",
            "value": "360301",
            "parentVal": "360300"
          },
          {
            "text": "安源区",
            "value": "360302",
            "parentVal": "360300"
          },
          {
            "text": "湘东区",
            "value": "360313",
            "parentVal": "360300"
          },
          {
            "text": "莲花县",
            "value": "360321",
            "parentVal": "360300"
          },
          {
            "text": "上栗县",
            "value": "360322",
            "parentVal": "360300"
          },
          {
            "text": "芦溪县",
            "value": "360323",
            "parentVal": "360300"
          },
          {
            "text": "市辖区",
            "value": "360401",
            "parentVal": "360400"
          },
          {
            "text": "庐山区",
            "value": "360402",
            "parentVal": "360400"
          },
          {
            "text": "浔阳区",
            "value": "360403",
            "parentVal": "360400"
          },
          {
            "text": "九江县",
            "value": "360421",
            "parentVal": "360400"
          },
          {
            "text": "武宁县",
            "value": "360423",
            "parentVal": "360400"
          },
          {
            "text": "修水县",
            "value": "360424",
            "parentVal": "360400"
          },
          {
            "text": "永修县",
            "value": "360425",
            "parentVal": "360400"
          },
          {
            "text": "德安县",
            "value": "360426",
            "parentVal": "360400"
          },
          {
            "text": "星子县",
            "value": "360427",
            "parentVal": "360400"
          },
          {
            "text": "都昌县",
            "value": "360428",
            "parentVal": "360400"
          },
          {
            "text": "湖口县",
            "value": "360429",
            "parentVal": "360400"
          },
          {
            "text": "彭泽县",
            "value": "360430",
            "parentVal": "360400"
          },
          {
            "text": "瑞昌市",
            "value": "360481",
            "parentVal": "360400"
          },
          {
            "text": "共青城市",
            "value": "360482",
            "parentVal": "360400"
          },
          {
            "text": "市辖区",
            "value": "360501",
            "parentVal": "360500"
          },
          {
            "text": "渝水区",
            "value": "360502",
            "parentVal": "360500"
          },
          {
            "text": "分宜县",
            "value": "360521",
            "parentVal": "360500"
          },
          {
            "text": "市辖区",
            "value": "360601",
            "parentVal": "360600"
          },
          {
            "text": "月湖区",
            "value": "360602",
            "parentVal": "360600"
          },
          {
            "text": "余江县",
            "value": "360622",
            "parentVal": "360600"
          },
          {
            "text": "贵溪市",
            "value": "360681",
            "parentVal": "360600"
          },
          {
            "text": "市辖区",
            "value": "360701",
            "parentVal": "360700"
          },
          {
            "text": "章贡区",
            "value": "360702",
            "parentVal": "360700"
          },
          {
            "text": "赣县",
            "value": "360721",
            "parentVal": "360700"
          },
          {
            "text": "信丰县",
            "value": "360722",
            "parentVal": "360700"
          },
          {
            "text": "大余县",
            "value": "360723",
            "parentVal": "360700"
          },
          {
            "text": "上犹县",
            "value": "360724",
            "parentVal": "360700"
          },
          {
            "text": "崇义县",
            "value": "360725",
            "parentVal": "360700"
          },
          {
            "text": "安远县",
            "value": "360726",
            "parentVal": "360700"
          },
          {
            "text": "龙南县",
            "value": "360727",
            "parentVal": "360700"
          },
          {
            "text": "定南县",
            "value": "360728",
            "parentVal": "360700"
          },
          {
            "text": "全南县",
            "value": "360729",
            "parentVal": "360700"
          },
          {
            "text": "宁都县",
            "value": "360730",
            "parentVal": "360700"
          },
          {
            "text": "于都县",
            "value": "360731",
            "parentVal": "360700"
          },
          {
            "text": "兴国县",
            "value": "360732",
            "parentVal": "360700"
          },
          {
            "text": "会昌县",
            "value": "360733",
            "parentVal": "360700"
          },
          {
            "text": "寻乌县",
            "value": "360734",
            "parentVal": "360700"
          },
          {
            "text": "石城县",
            "value": "360735",
            "parentVal": "360700"
          },
          {
            "text": "瑞金市",
            "value": "360781",
            "parentVal": "360700"
          },
          {
            "text": "南康市",
            "value": "360782",
            "parentVal": "360700"
          },
          {
            "text": "市辖区",
            "value": "360801",
            "parentVal": "360800"
          },
          {
            "text": "吉州区",
            "value": "360802",
            "parentVal": "360800"
          },
          {
            "text": "青原区",
            "value": "360803",
            "parentVal": "360800"
          },
          {
            "text": "吉安县",
            "value": "360821",
            "parentVal": "360800"
          },
          {
            "text": "吉水县",
            "value": "360822",
            "parentVal": "360800"
          },
          {
            "text": "峡江县",
            "value": "360823",
            "parentVal": "360800"
          },
          {
            "text": "新干县",
            "value": "360824",
            "parentVal": "360800"
          },
          {
            "text": "永丰县",
            "value": "360825",
            "parentVal": "360800"
          },
          {
            "text": "泰和县",
            "value": "360826",
            "parentVal": "360800"
          },
          {
            "text": "遂川县",
            "value": "360827",
            "parentVal": "360800"
          },
          {
            "text": "万安县",
            "value": "360828",
            "parentVal": "360800"
          },
          {
            "text": "安福县",
            "value": "360829",
            "parentVal": "360800"
          },
          {
            "text": "永新县",
            "value": "360830",
            "parentVal": "360800"
          },
          {
            "text": "井冈山市",
            "value": "360881",
            "parentVal": "360800"
          },
          {
            "text": "市辖区",
            "value": "360901",
            "parentVal": "360900"
          },
          {
            "text": "袁州区",
            "value": "360902",
            "parentVal": "360900"
          },
          {
            "text": "奉新县",
            "value": "360921",
            "parentVal": "360900"
          },
          {
            "text": "万载县",
            "value": "360922",
            "parentVal": "360900"
          },
          {
            "text": "上高县",
            "value": "360923",
            "parentVal": "360900"
          },
          {
            "text": "宜丰县",
            "value": "360924",
            "parentVal": "360900"
          },
          {
            "text": "靖安县",
            "value": "360925",
            "parentVal": "360900"
          },
          {
            "text": "铜鼓县",
            "value": "360926",
            "parentVal": "360900"
          },
          {
            "text": "丰城市",
            "value": "360981",
            "parentVal": "360900"
          },
          {
            "text": "樟树市",
            "value": "360982",
            "parentVal": "360900"
          },
          {
            "text": "高安市",
            "value": "360983",
            "parentVal": "360900"
          },
          {
            "text": "市辖区",
            "value": "361001",
            "parentVal": "361000"
          },
          {
            "text": "临川区",
            "value": "361002",
            "parentVal": "361000"
          },
          {
            "text": "南城县",
            "value": "361021",
            "parentVal": "361000"
          },
          {
            "text": "黎川县",
            "value": "361022",
            "parentVal": "361000"
          },
          {
            "text": "南丰县",
            "value": "361023",
            "parentVal": "361000"
          },
          {
            "text": "崇仁县",
            "value": "361024",
            "parentVal": "361000"
          },
          {
            "text": "乐安县",
            "value": "361025",
            "parentVal": "361000"
          },
          {
            "text": "宜黄县",
            "value": "361026",
            "parentVal": "361000"
          },
          {
            "text": "金溪县",
            "value": "361027",
            "parentVal": "361000"
          },
          {
            "text": "资溪县",
            "value": "361028",
            "parentVal": "361000"
          },
          {
            "text": "东乡县",
            "value": "361029",
            "parentVal": "361000"
          },
          {
            "text": "广昌县",
            "value": "361030",
            "parentVal": "361000"
          },
          {
            "text": "市辖区",
            "value": "361101",
            "parentVal": "361100"
          },
          {
            "text": "信州区",
            "value": "361102",
            "parentVal": "361100"
          },
          {
            "text": "上饶县",
            "value": "361121",
            "parentVal": "361100"
          },
          {
            "text": "广丰县",
            "value": "361122",
            "parentVal": "361100"
          },
          {
            "text": "玉山县",
            "value": "361123",
            "parentVal": "361100"
          },
          {
            "text": "铅山县",
            "value": "361124",
            "parentVal": "361100"
          },
          {
            "text": "横峰县",
            "value": "361125",
            "parentVal": "361100"
          },
          {
            "text": "弋阳县",
            "value": "361126",
            "parentVal": "361100"
          },
          {
            "text": "余干县",
            "value": "361127",
            "parentVal": "361100"
          },
          {
            "text": "鄱阳县",
            "value": "361128",
            "parentVal": "361100"
          },
          {
            "text": "万年县",
            "value": "361129",
            "parentVal": "361100"
          },
          {
            "text": "婺源县",
            "value": "361130",
            "parentVal": "361100"
          },
          {
            "text": "德兴市",
            "value": "361181",
            "parentVal": "361100"
          },
          {
            "text": "市辖区",
            "value": "370101",
            "parentVal": "370100"
          },
          {
            "text": "历下区",
            "value": "370102",
            "parentVal": "370100"
          },
          {
            "text": "市中区",
            "value": "370103",
            "parentVal": "370100"
          },
          {
            "text": "槐荫区",
            "value": "370104",
            "parentVal": "370100"
          },
          {
            "text": "天桥区",
            "value": "370105",
            "parentVal": "370100"
          },
          {
            "text": "历城区",
            "value": "370112",
            "parentVal": "370100"
          },
          {
            "text": "长清区",
            "value": "370113",
            "parentVal": "370100"
          },
          {
            "text": "平阴县",
            "value": "370124",
            "parentVal": "370100"
          },
          {
            "text": "济阳县",
            "value": "370125",
            "parentVal": "370100"
          },
          {
            "text": "商河县",
            "value": "370126",
            "parentVal": "370100"
          },
          {
            "text": "章丘市",
            "value": "370181",
            "parentVal": "370100"
          },
          {
            "text": "市辖区",
            "value": "370201",
            "parentVal": "370200"
          },
          {
            "text": "市南区",
            "value": "370202",
            "parentVal": "370200"
          },
          {
            "text": "市北区",
            "value": "370203",
            "parentVal": "370200"
          },
          {
            "text": "黄岛区",
            "value": "370211",
            "parentVal": "370200"
          },
          {
            "text": "崂山区",
            "value": "370212",
            "parentVal": "370200"
          },
          {
            "text": "李沧区",
            "value": "370213",
            "parentVal": "370200"
          },
          {
            "text": "城阳区",
            "value": "370214",
            "parentVal": "370200"
          },
          {
            "text": "胶州市",
            "value": "370281",
            "parentVal": "370200"
          },
          {
            "text": "即墨市",
            "value": "370282",
            "parentVal": "370200"
          },
          {
            "text": "平度市",
            "value": "370283",
            "parentVal": "370200"
          },
          {
            "text": "莱西市",
            "value": "370285",
            "parentVal": "370200"
          },
          {
            "text": "市辖区",
            "value": "370301",
            "parentVal": "370300"
          },
          {
            "text": "淄川区",
            "value": "370302",
            "parentVal": "370300"
          },
          {
            "text": "张店区",
            "value": "370303",
            "parentVal": "370300"
          },
          {
            "text": "博山区",
            "value": "370304",
            "parentVal": "370300"
          },
          {
            "text": "临淄区",
            "value": "370305",
            "parentVal": "370300"
          },
          {
            "text": "周村区",
            "value": "370306",
            "parentVal": "370300"
          },
          {
            "text": "桓台县",
            "value": "370321",
            "parentVal": "370300"
          },
          {
            "text": "高青县",
            "value": "370322",
            "parentVal": "370300"
          },
          {
            "text": "沂源县",
            "value": "370323",
            "parentVal": "370300"
          },
          {
            "text": "市辖区",
            "value": "370401",
            "parentVal": "370400"
          },
          {
            "text": "市中区",
            "value": "370402",
            "parentVal": "370400"
          },
          {
            "text": "薛城区",
            "value": "370403",
            "parentVal": "370400"
          },
          {
            "text": "峄城区",
            "value": "370404",
            "parentVal": "370400"
          },
          {
            "text": "台儿庄区",
            "value": "370405",
            "parentVal": "370400"
          },
          {
            "text": "山亭区",
            "value": "370406",
            "parentVal": "370400"
          },
          {
            "text": "滕州市",
            "value": "370481",
            "parentVal": "370400"
          },
          {
            "text": "市辖区",
            "value": "370501",
            "parentVal": "370500"
          },
          {
            "text": "东营区",
            "value": "370502",
            "parentVal": "370500"
          },
          {
            "text": "河口区",
            "value": "370503",
            "parentVal": "370500"
          },
          {
            "text": "垦利县",
            "value": "370521",
            "parentVal": "370500"
          },
          {
            "text": "利津县",
            "value": "370522",
            "parentVal": "370500"
          },
          {
            "text": "广饶县",
            "value": "370523",
            "parentVal": "370500"
          },
          {
            "text": "市辖区",
            "value": "370601",
            "parentVal": "370600"
          },
          {
            "text": "芝罘区",
            "value": "370602",
            "parentVal": "370600"
          },
          {
            "text": "福山区",
            "value": "370611",
            "parentVal": "370600"
          },
          {
            "text": "牟平区",
            "value": "370612",
            "parentVal": "370600"
          },
          {
            "text": "莱山区",
            "value": "370613",
            "parentVal": "370600"
          },
          {
            "text": "长岛县",
            "value": "370634",
            "parentVal": "370600"
          },
          {
            "text": "龙口市",
            "value": "370681",
            "parentVal": "370600"
          },
          {
            "text": "莱阳市",
            "value": "370682",
            "parentVal": "370600"
          },
          {
            "text": "莱州市",
            "value": "370683",
            "parentVal": "370600"
          },
          {
            "text": "蓬莱市",
            "value": "370684",
            "parentVal": "370600"
          },
          {
            "text": "招远市",
            "value": "370685",
            "parentVal": "370600"
          },
          {
            "text": "栖霞市",
            "value": "370686",
            "parentVal": "370600"
          },
          {
            "text": "海阳市",
            "value": "370687",
            "parentVal": "370600"
          },
          {
            "text": "市辖区",
            "value": "370701",
            "parentVal": "370700"
          },
          {
            "text": "潍城区",
            "value": "370702",
            "parentVal": "370700"
          },
          {
            "text": "寒亭区",
            "value": "370703",
            "parentVal": "370700"
          },
          {
            "text": "坊子区",
            "value": "370704",
            "parentVal": "370700"
          },
          {
            "text": "奎文区",
            "value": "370705",
            "parentVal": "370700"
          },
          {
            "text": "临朐县",
            "value": "370724",
            "parentVal": "370700"
          },
          {
            "text": "昌乐县",
            "value": "370725",
            "parentVal": "370700"
          },
          {
            "text": "青州市",
            "value": "370781",
            "parentVal": "370700"
          },
          {
            "text": "诸城市",
            "value": "370782",
            "parentVal": "370700"
          },
          {
            "text": "寿光市",
            "value": "370783",
            "parentVal": "370700"
          },
          {
            "text": "安丘市",
            "value": "370784",
            "parentVal": "370700"
          },
          {
            "text": "高密市",
            "value": "370785",
            "parentVal": "370700"
          },
          {
            "text": "昌邑市",
            "value": "370786",
            "parentVal": "370700"
          },
          {
            "text": "市辖区",
            "value": "370801",
            "parentVal": "370800"
          },
          {
            "text": "市中区",
            "value": "370802",
            "parentVal": "370800"
          },
          {
            "text": "任城区",
            "value": "370811",
            "parentVal": "370800"
          },
          {
            "text": "微山县",
            "value": "370826",
            "parentVal": "370800"
          },
          {
            "text": "鱼台县",
            "value": "370827",
            "parentVal": "370800"
          },
          {
            "text": "金乡县",
            "value": "370828",
            "parentVal": "370800"
          },
          {
            "text": "嘉祥县",
            "value": "370829",
            "parentVal": "370800"
          },
          {
            "text": "汶上县",
            "value": "370830",
            "parentVal": "370800"
          },
          {
            "text": "泗水县",
            "value": "370831",
            "parentVal": "370800"
          },
          {
            "text": "梁山县",
            "value": "370832",
            "parentVal": "370800"
          },
          {
            "text": "曲阜市",
            "value": "370881",
            "parentVal": "370800"
          },
          {
            "text": "兖州市",
            "value": "370882",
            "parentVal": "370800"
          },
          {
            "text": "邹城市",
            "value": "370883",
            "parentVal": "370800"
          },
          {
            "text": "市辖区",
            "value": "370901",
            "parentVal": "370900"
          },
          {
            "text": "泰山区",
            "value": "370902",
            "parentVal": "370900"
          },
          {
            "text": "岱岳区",
            "value": "370911",
            "parentVal": "370900"
          },
          {
            "text": "宁阳县",
            "value": "370921",
            "parentVal": "370900"
          },
          {
            "text": "东平县",
            "value": "370923",
            "parentVal": "370900"
          },
          {
            "text": "新泰市",
            "value": "370982",
            "parentVal": "370900"
          },
          {
            "text": "肥城市",
            "value": "370983",
            "parentVal": "370900"
          },
          {
            "text": "市辖区",
            "value": "371001",
            "parentVal": "371000"
          },
          {
            "text": "环翠区",
            "value": "371002",
            "parentVal": "371000"
          },
          {
            "text": "文登市",
            "value": "371081",
            "parentVal": "371000"
          },
          {
            "text": "荣成市",
            "value": "371082",
            "parentVal": "371000"
          },
          {
            "text": "乳山市",
            "value": "371083",
            "parentVal": "371000"
          },
          {
            "text": "市辖区",
            "value": "371101",
            "parentVal": "371100"
          },
          {
            "text": "东港区",
            "value": "371102",
            "parentVal": "371100"
          },
          {
            "text": "岚山区",
            "value": "371103",
            "parentVal": "371100"
          },
          {
            "text": "五莲县",
            "value": "371121",
            "parentVal": "371100"
          },
          {
            "text": "莒县",
            "value": "371122",
            "parentVal": "371100"
          },
          {
            "text": "市辖区",
            "value": "371201",
            "parentVal": "371200"
          },
          {
            "text": "莱城区",
            "value": "371202",
            "parentVal": "371200"
          },
          {
            "text": "钢城区",
            "value": "371203",
            "parentVal": "371200"
          },
          {
            "text": "市辖区",
            "value": "371301",
            "parentVal": "371300"
          },
          {
            "text": "兰山区",
            "value": "371302",
            "parentVal": "371300"
          },
          {
            "text": "罗庄区",
            "value": "371311",
            "parentVal": "371300"
          },
          {
            "text": "河东区",
            "value": "371312",
            "parentVal": "371300"
          },
          {
            "text": "沂南县",
            "value": "371321",
            "parentVal": "371300"
          },
          {
            "text": "郯城县",
            "value": "371322",
            "parentVal": "371300"
          },
          {
            "text": "沂水县",
            "value": "371323",
            "parentVal": "371300"
          },
          {
            "text": "苍山县",
            "value": "371324",
            "parentVal": "371300"
          },
          {
            "text": "费县",
            "value": "371325",
            "parentVal": "371300"
          },
          {
            "text": "平邑县",
            "value": "371326",
            "parentVal": "371300"
          },
          {
            "text": "莒南县",
            "value": "371327",
            "parentVal": "371300"
          },
          {
            "text": "蒙阴县",
            "value": "371328",
            "parentVal": "371300"
          },
          {
            "text": "临沭县",
            "value": "371329",
            "parentVal": "371300"
          },
          {
            "text": "市辖区",
            "value": "371401",
            "parentVal": "371400"
          },
          {
            "text": "德城区",
            "value": "371402",
            "parentVal": "371400"
          },
          {
            "text": "陵县",
            "value": "371421",
            "parentVal": "371400"
          },
          {
            "text": "宁津县",
            "value": "371422",
            "parentVal": "371400"
          },
          {
            "text": "庆云县",
            "value": "371423",
            "parentVal": "371400"
          },
          {
            "text": "临邑县",
            "value": "371424",
            "parentVal": "371400"
          },
          {
            "text": "齐河县",
            "value": "371425",
            "parentVal": "371400"
          },
          {
            "text": "平原县",
            "value": "371426",
            "parentVal": "371400"
          },
          {
            "text": "夏津县",
            "value": "371427",
            "parentVal": "371400"
          },
          {
            "text": "武城县",
            "value": "371428",
            "parentVal": "371400"
          },
          {
            "text": "乐陵市",
            "value": "371481",
            "parentVal": "371400"
          },
          {
            "text": "禹城市",
            "value": "371482",
            "parentVal": "371400"
          },
          {
            "text": "市辖区",
            "value": "371501",
            "parentVal": "371500"
          },
          {
            "text": "东昌府区",
            "value": "371502",
            "parentVal": "371500"
          },
          {
            "text": "阳谷县",
            "value": "371521",
            "parentVal": "371500"
          },
          {
            "text": "莘县",
            "value": "371522",
            "parentVal": "371500"
          },
          {
            "text": "茌平县",
            "value": "371523",
            "parentVal": "371500"
          },
          {
            "text": "东阿县",
            "value": "371524",
            "parentVal": "371500"
          },
          {
            "text": "冠县",
            "value": "371525",
            "parentVal": "371500"
          },
          {
            "text": "高唐县",
            "value": "371526",
            "parentVal": "371500"
          },
          {
            "text": "临清市",
            "value": "371581",
            "parentVal": "371500"
          },
          {
            "text": "市辖区",
            "value": "371601",
            "parentVal": "371600"
          },
          {
            "text": "滨城区",
            "value": "371602",
            "parentVal": "371600"
          },
          {
            "text": "惠民县",
            "value": "371621",
            "parentVal": "371600"
          },
          {
            "text": "阳信县",
            "value": "371622",
            "parentVal": "371600"
          },
          {
            "text": "无棣县",
            "value": "371623",
            "parentVal": "371600"
          },
          {
            "text": "沾化县",
            "value": "371624",
            "parentVal": "371600"
          },
          {
            "text": "博兴县",
            "value": "371625",
            "parentVal": "371600"
          },
          {
            "text": "邹平县",
            "value": "371626",
            "parentVal": "371600"
          },
          {
            "text": "市辖区",
            "value": "371701",
            "parentVal": "371700"
          },
          {
            "text": "牡丹区",
            "value": "371702",
            "parentVal": "371700"
          },
          {
            "text": "曹县",
            "value": "371721",
            "parentVal": "371700"
          },
          {
            "text": "单县",
            "value": "371722",
            "parentVal": "371700"
          },
          {
            "text": "成武县",
            "value": "371723",
            "parentVal": "371700"
          },
          {
            "text": "巨野县",
            "value": "371724",
            "parentVal": "371700"
          },
          {
            "text": "郓城县",
            "value": "371725",
            "parentVal": "371700"
          },
          {
            "text": "鄄城县",
            "value": "371726",
            "parentVal": "371700"
          },
          {
            "text": "定陶县",
            "value": "371727",
            "parentVal": "371700"
          },
          {
            "text": "东明县",
            "value": "371728",
            "parentVal": "371700"
          },
          {
            "text": "市辖区",
            "value": "410101",
            "parentVal": "410100"
          },
          {
            "text": "中原区",
            "value": "410102",
            "parentVal": "410100"
          },
          {
            "text": "二七区",
            "value": "410103",
            "parentVal": "410100"
          },
          {
            "text": "管城回族区",
            "value": "410104",
            "parentVal": "410100"
          },
          {
            "text": "金水区",
            "value": "410105",
            "parentVal": "410100"
          },
          {
            "text": "上街区",
            "value": "410106",
            "parentVal": "410100"
          },
          {
            "text": "惠济区",
            "value": "410108",
            "parentVal": "410100"
          },
          {
            "text": "中牟县",
            "value": "410122",
            "parentVal": "410100"
          },
          {
            "text": "巩义市",
            "value": "410181",
            "parentVal": "410100"
          },
          {
            "text": "荥阳市",
            "value": "410182",
            "parentVal": "410100"
          },
          {
            "text": "新密市",
            "value": "410183",
            "parentVal": "410100"
          },
          {
            "text": "新郑市",
            "value": "410184",
            "parentVal": "410100"
          },
          {
            "text": "登封市",
            "value": "410185",
            "parentVal": "410100"
          },
          {
            "text": "市辖区",
            "value": "410201",
            "parentVal": "410200"
          },
          {
            "text": "龙亭区",
            "value": "410202",
            "parentVal": "410200"
          },
          {
            "text": "顺河回族区",
            "value": "410203",
            "parentVal": "410200"
          },
          {
            "text": "鼓楼区",
            "value": "410204",
            "parentVal": "410200"
          },
          {
            "text": "禹王台区",
            "value": "410205",
            "parentVal": "410200"
          },
          {
            "text": "金明区",
            "value": "410211",
            "parentVal": "410200"
          },
          {
            "text": "杞县",
            "value": "410221",
            "parentVal": "410200"
          },
          {
            "text": "通许县",
            "value": "410222",
            "parentVal": "410200"
          },
          {
            "text": "尉氏县",
            "value": "410223",
            "parentVal": "410200"
          },
          {
            "text": "开封县",
            "value": "410224",
            "parentVal": "410200"
          },
          {
            "text": "兰考县",
            "value": "410225",
            "parentVal": "410200"
          },
          {
            "text": "市辖区",
            "value": "410301",
            "parentVal": "410300"
          },
          {
            "text": "老城区",
            "value": "410302",
            "parentVal": "410300"
          },
          {
            "text": "西工区",
            "value": "410303",
            "parentVal": "410300"
          },
          {
            "text": "瀍河回族区",
            "value": "410304",
            "parentVal": "410300"
          },
          {
            "text": "涧西区",
            "value": "410305",
            "parentVal": "410300"
          },
          {
            "text": "吉利区",
            "value": "410306",
            "parentVal": "410300"
          },
          {
            "text": "洛龙区",
            "value": "410311",
            "parentVal": "410300"
          },
          {
            "text": "孟津县",
            "value": "410322",
            "parentVal": "410300"
          },
          {
            "text": "新安县",
            "value": "410323",
            "parentVal": "410300"
          },
          {
            "text": "栾川县",
            "value": "410324",
            "parentVal": "410300"
          },
          {
            "text": "嵩县",
            "value": "410325",
            "parentVal": "410300"
          },
          {
            "text": "汝阳县",
            "value": "410326",
            "parentVal": "410300"
          },
          {
            "text": "宜阳县",
            "value": "410327",
            "parentVal": "410300"
          },
          {
            "text": "洛宁县",
            "value": "410328",
            "parentVal": "410300"
          },
          {
            "text": "伊川县",
            "value": "410329",
            "parentVal": "410300"
          },
          {
            "text": "偃师市",
            "value": "410381",
            "parentVal": "410300"
          },
          {
            "text": "市辖区",
            "value": "410401",
            "parentVal": "410400"
          },
          {
            "text": "新华区",
            "value": "410402",
            "parentVal": "410400"
          },
          {
            "text": "卫东区",
            "value": "410403",
            "parentVal": "410400"
          },
          {
            "text": "石龙区",
            "value": "410404",
            "parentVal": "410400"
          },
          {
            "text": "湛河区",
            "value": "410411",
            "parentVal": "410400"
          },
          {
            "text": "宝丰县",
            "value": "410421",
            "parentVal": "410400"
          },
          {
            "text": "叶县",
            "value": "410422",
            "parentVal": "410400"
          },
          {
            "text": "鲁山县",
            "value": "410423",
            "parentVal": "410400"
          },
          {
            "text": "郏县",
            "value": "410425",
            "parentVal": "410400"
          },
          {
            "text": "舞钢市",
            "value": "410481",
            "parentVal": "410400"
          },
          {
            "text": "汝州市",
            "value": "410482",
            "parentVal": "410400"
          },
          {
            "text": "市辖区",
            "value": "410501",
            "parentVal": "410500"
          },
          {
            "text": "文峰区",
            "value": "410502",
            "parentVal": "410500"
          },
          {
            "text": "北关区",
            "value": "410503",
            "parentVal": "410500"
          },
          {
            "text": "殷都区",
            "value": "410505",
            "parentVal": "410500"
          },
          {
            "text": "龙安区",
            "value": "410506",
            "parentVal": "410500"
          },
          {
            "text": "安阳县",
            "value": "410522",
            "parentVal": "410500"
          },
          {
            "text": "汤阴县",
            "value": "410523",
            "parentVal": "410500"
          },
          {
            "text": "滑县",
            "value": "410526",
            "parentVal": "410500"
          },
          {
            "text": "内黄县",
            "value": "410527",
            "parentVal": "410500"
          },
          {
            "text": "林州市",
            "value": "410581",
            "parentVal": "410500"
          },
          {
            "text": "市辖区",
            "value": "410601",
            "parentVal": "410600"
          },
          {
            "text": "鹤山区",
            "value": "410602",
            "parentVal": "410600"
          },
          {
            "text": "山城区",
            "value": "410603",
            "parentVal": "410600"
          },
          {
            "text": "淇滨区",
            "value": "410611",
            "parentVal": "410600"
          },
          {
            "text": "浚县",
            "value": "410621",
            "parentVal": "410600"
          },
          {
            "text": "淇县",
            "value": "410622",
            "parentVal": "410600"
          },
          {
            "text": "市辖区",
            "value": "410701",
            "parentVal": "410700"
          },
          {
            "text": "红旗区",
            "value": "410702",
            "parentVal": "410700"
          },
          {
            "text": "卫滨区",
            "value": "410703",
            "parentVal": "410700"
          },
          {
            "text": "凤泉区",
            "value": "410704",
            "parentVal": "410700"
          },
          {
            "text": "牧野区",
            "value": "410711",
            "parentVal": "410700"
          },
          {
            "text": "新乡县",
            "value": "410721",
            "parentVal": "410700"
          },
          {
            "text": "获嘉县",
            "value": "410724",
            "parentVal": "410700"
          },
          {
            "text": "原阳县",
            "value": "410725",
            "parentVal": "410700"
          },
          {
            "text": "延津县",
            "value": "410726",
            "parentVal": "410700"
          },
          {
            "text": "封丘县",
            "value": "410727",
            "parentVal": "410700"
          },
          {
            "text": "长垣县",
            "value": "410728",
            "parentVal": "410700"
          },
          {
            "text": "卫辉市",
            "value": "410781",
            "parentVal": "410700"
          },
          {
            "text": "辉县市",
            "value": "410782",
            "parentVal": "410700"
          },
          {
            "text": "市辖区",
            "value": "410801",
            "parentVal": "410800"
          },
          {
            "text": "解放区",
            "value": "410802",
            "parentVal": "410800"
          },
          {
            "text": "中站区",
            "value": "410803",
            "parentVal": "410800"
          },
          {
            "text": "马村区",
            "value": "410804",
            "parentVal": "410800"
          },
          {
            "text": "山阳区",
            "value": "410811",
            "parentVal": "410800"
          },
          {
            "text": "修武县",
            "value": "410821",
            "parentVal": "410800"
          },
          {
            "text": "博爱县",
            "value": "410822",
            "parentVal": "410800"
          },
          {
            "text": "武陟县",
            "value": "410823",
            "parentVal": "410800"
          },
          {
            "text": "温县",
            "value": "410825",
            "parentVal": "410800"
          },
          {
            "text": "沁阳市",
            "value": "410882",
            "parentVal": "410800"
          },
          {
            "text": "孟州市",
            "value": "410883",
            "parentVal": "410800"
          },
          {
            "text": "市辖区",
            "value": "410901",
            "parentVal": "410900"
          },
          {
            "text": "华龙区",
            "value": "410902",
            "parentVal": "410900"
          },
          {
            "text": "清丰县",
            "value": "410922",
            "parentVal": "410900"
          },
          {
            "text": "南乐县",
            "value": "410923",
            "parentVal": "410900"
          },
          {
            "text": "范县",
            "value": "410926",
            "parentVal": "410900"
          },
          {
            "text": "台前县",
            "value": "410927",
            "parentVal": "410900"
          },
          {
            "text": "濮阳县",
            "value": "410928",
            "parentVal": "410900"
          },
          {
            "text": "市辖区",
            "value": "411001",
            "parentVal": "411000"
          },
          {
            "text": "魏都区",
            "value": "411002",
            "parentVal": "411000"
          },
          {
            "text": "许昌县",
            "value": "411023",
            "parentVal": "411000"
          },
          {
            "text": "鄢陵县",
            "value": "411024",
            "parentVal": "411000"
          },
          {
            "text": "襄城县",
            "value": "411025",
            "parentVal": "411000"
          },
          {
            "text": "禹州市",
            "value": "411081",
            "parentVal": "411000"
          },
          {
            "text": "长葛市",
            "value": "411082",
            "parentVal": "411000"
          },
          {
            "text": "市辖区",
            "value": "411101",
            "parentVal": "411100"
          },
          {
            "text": "源汇区",
            "value": "411102",
            "parentVal": "411100"
          },
          {
            "text": "郾城区",
            "value": "411103",
            "parentVal": "411100"
          },
          {
            "text": "召陵区",
            "value": "411104",
            "parentVal": "411100"
          },
          {
            "text": "舞阳县",
            "value": "411121",
            "parentVal": "411100"
          },
          {
            "text": "临颍县",
            "value": "411122",
            "parentVal": "411100"
          },
          {
            "text": "市辖区",
            "value": "411201",
            "parentVal": "411200"
          },
          {
            "text": "湖滨区",
            "value": "411202",
            "parentVal": "411200"
          },
          {
            "text": "渑池县",
            "value": "411221",
            "parentVal": "411200"
          },
          {
            "text": "陕县",
            "value": "411222",
            "parentVal": "411200"
          },
          {
            "text": "卢氏县",
            "value": "411224",
            "parentVal": "411200"
          },
          {
            "text": "义马市",
            "value": "411281",
            "parentVal": "411200"
          },
          {
            "text": "灵宝市",
            "value": "411282",
            "parentVal": "411200"
          },
          {
            "text": "市辖区",
            "value": "411301",
            "parentVal": "411300"
          },
          {
            "text": "宛城区",
            "value": "411302",
            "parentVal": "411300"
          },
          {
            "text": "卧龙区",
            "value": "411303",
            "parentVal": "411300"
          },
          {
            "text": "南召县",
            "value": "411321",
            "parentVal": "411300"
          },
          {
            "text": "方城县",
            "value": "411322",
            "parentVal": "411300"
          },
          {
            "text": "西峡县",
            "value": "411323",
            "parentVal": "411300"
          },
          {
            "text": "镇平县",
            "value": "411324",
            "parentVal": "411300"
          },
          {
            "text": "内乡县",
            "value": "411325",
            "parentVal": "411300"
          },
          {
            "text": "淅川县",
            "value": "411326",
            "parentVal": "411300"
          },
          {
            "text": "社旗县",
            "value": "411327",
            "parentVal": "411300"
          },
          {
            "text": "唐河县",
            "value": "411328",
            "parentVal": "411300"
          },
          {
            "text": "新野县",
            "value": "411329",
            "parentVal": "411300"
          },
          {
            "text": "桐柏县",
            "value": "411330",
            "parentVal": "411300"
          },
          {
            "text": "邓州市",
            "value": "411381",
            "parentVal": "411300"
          },
          {
            "text": "市辖区",
            "value": "411401",
            "parentVal": "411400"
          },
          {
            "text": "梁园区",
            "value": "411402",
            "parentVal": "411400"
          },
          {
            "text": "睢阳区",
            "value": "411403",
            "parentVal": "411400"
          },
          {
            "text": "民权县",
            "value": "411421",
            "parentVal": "411400"
          },
          {
            "text": "睢县",
            "value": "411422",
            "parentVal": "411400"
          },
          {
            "text": "宁陵县",
            "value": "411423",
            "parentVal": "411400"
          },
          {
            "text": "柘城县",
            "value": "411424",
            "parentVal": "411400"
          },
          {
            "text": "虞城县",
            "value": "411425",
            "parentVal": "411400"
          },
          {
            "text": "夏邑县",
            "value": "411426",
            "parentVal": "411400"
          },
          {
            "text": "永城市",
            "value": "411481",
            "parentVal": "411400"
          },
          {
            "text": "市辖区",
            "value": "411501",
            "parentVal": "411500"
          },
          {
            "text": "浉河区",
            "value": "411502",
            "parentVal": "411500"
          },
          {
            "text": "平桥区",
            "value": "411503",
            "parentVal": "411500"
          },
          {
            "text": "罗山县",
            "value": "411521",
            "parentVal": "411500"
          },
          {
            "text": "光山县",
            "value": "411522",
            "parentVal": "411500"
          },
          {
            "text": "新县",
            "value": "411523",
            "parentVal": "411500"
          },
          {
            "text": "商城县",
            "value": "411524",
            "parentVal": "411500"
          },
          {
            "text": "固始县",
            "value": "411525",
            "parentVal": "411500"
          },
          {
            "text": "潢川县",
            "value": "411526",
            "parentVal": "411500"
          },
          {
            "text": "淮滨县",
            "value": "411527",
            "parentVal": "411500"
          },
          {
            "text": "息县",
            "value": "411528",
            "parentVal": "411500"
          },
          {
            "text": "市辖区",
            "value": "411601",
            "parentVal": "411600"
          },
          {
            "text": "川汇区",
            "value": "411602",
            "parentVal": "411600"
          },
          {
            "text": "扶沟县",
            "value": "411621",
            "parentVal": "411600"
          },
          {
            "text": "西华县",
            "value": "411622",
            "parentVal": "411600"
          },
          {
            "text": "商水县",
            "value": "411623",
            "parentVal": "411600"
          },
          {
            "text": "沈丘县",
            "value": "411624",
            "parentVal": "411600"
          },
          {
            "text": "郸城县",
            "value": "411625",
            "parentVal": "411600"
          },
          {
            "text": "淮阳县",
            "value": "411626",
            "parentVal": "411600"
          },
          {
            "text": "太康县",
            "value": "411627",
            "parentVal": "411600"
          },
          {
            "text": "鹿邑县",
            "value": "411628",
            "parentVal": "411600"
          },
          {
            "text": "项城市",
            "value": "411681",
            "parentVal": "411600"
          },
          {
            "text": "市辖区",
            "value": "411701",
            "parentVal": "411700"
          },
          {
            "text": "驿城区",
            "value": "411702",
            "parentVal": "411700"
          },
          {
            "text": "西平县",
            "value": "411721",
            "parentVal": "411700"
          },
          {
            "text": "上蔡县",
            "value": "411722",
            "parentVal": "411700"
          },
          {
            "text": "平舆县",
            "value": "411723",
            "parentVal": "411700"
          },
          {
            "text": "正阳县",
            "value": "411724",
            "parentVal": "411700"
          },
          {
            "text": "确山县",
            "value": "411725",
            "parentVal": "411700"
          },
          {
            "text": "泌阳县",
            "value": "411726",
            "parentVal": "411700"
          },
          {
            "text": "汝南县",
            "value": "411727",
            "parentVal": "411700"
          },
          {
            "text": "遂平县",
            "value": "411728",
            "parentVal": "411700"
          },
          {
            "text": "新蔡县",
            "value": "411729",
            "parentVal": "411700"
          },
          {
            "text": "济源市",
            "value": "419001",
            "parentVal": "419000"
          },
          {
            "text": "市辖区",
            "value": "420101",
            "parentVal": "420100"
          },
          {
            "text": "江岸区",
            "value": "420102",
            "parentVal": "420100"
          },
          {
            "text": "江汉区",
            "value": "420103",
            "parentVal": "420100"
          },
          {
            "text": "硚口区",
            "value": "420104",
            "parentVal": "420100"
          },
          {
            "text": "汉阳区",
            "value": "420105",
            "parentVal": "420100"
          },
          {
            "text": "武昌区",
            "value": "420106",
            "parentVal": "420100"
          },
          {
            "text": "青山区",
            "value": "420107",
            "parentVal": "420100"
          },
          {
            "text": "洪山区",
            "value": "420111",
            "parentVal": "420100"
          },
          {
            "text": "东西湖区",
            "value": "420112",
            "parentVal": "420100"
          },
          {
            "text": "汉南区",
            "value": "420113",
            "parentVal": "420100"
          },
          {
            "text": "蔡甸区",
            "value": "420114",
            "parentVal": "420100"
          },
          {
            "text": "江夏区",
            "value": "420115",
            "parentVal": "420100"
          },
          {
            "text": "黄陂区",
            "value": "420116",
            "parentVal": "420100"
          },
          {
            "text": "新洲区",
            "value": "420117",
            "parentVal": "420100"
          },
          {
            "text": "市辖区",
            "value": "420201",
            "parentVal": "420200"
          },
          {
            "text": "黄石港区",
            "value": "420202",
            "parentVal": "420200"
          },
          {
            "text": "西塞山区",
            "value": "420203",
            "parentVal": "420200"
          },
          {
            "text": "下陆区",
            "value": "420204",
            "parentVal": "420200"
          },
          {
            "text": "铁山区",
            "value": "420205",
            "parentVal": "420200"
          },
          {
            "text": "阳新县",
            "value": "420222",
            "parentVal": "420200"
          },
          {
            "text": "大冶市",
            "value": "420281",
            "parentVal": "420200"
          },
          {
            "text": "市辖区",
            "value": "420301",
            "parentVal": "420300"
          },
          {
            "text": "茅箭区",
            "value": "420302",
            "parentVal": "420300"
          },
          {
            "text": "张湾区",
            "value": "420303",
            "parentVal": "420300"
          },
          {
            "text": "郧县",
            "value": "420321",
            "parentVal": "420300"
          },
          {
            "text": "郧西县",
            "value": "420322",
            "parentVal": "420300"
          },
          {
            "text": "竹山县",
            "value": "420323",
            "parentVal": "420300"
          },
          {
            "text": "竹溪县",
            "value": "420324",
            "parentVal": "420300"
          },
          {
            "text": "房县",
            "value": "420325",
            "parentVal": "420300"
          },
          {
            "text": "丹江口市",
            "value": "420381",
            "parentVal": "420300"
          },
          {
            "text": "市辖区",
            "value": "420501",
            "parentVal": "420500"
          },
          {
            "text": "西陵区",
            "value": "420502",
            "parentVal": "420500"
          },
          {
            "text": "伍家岗区",
            "value": "420503",
            "parentVal": "420500"
          },
          {
            "text": "点军区",
            "value": "420504",
            "parentVal": "420500"
          },
          {
            "text": "猇亭区",
            "value": "420505",
            "parentVal": "420500"
          },
          {
            "text": "夷陵区",
            "value": "420506",
            "parentVal": "420500"
          },
          {
            "text": "远安县",
            "value": "420525",
            "parentVal": "420500"
          },
          {
            "text": "兴山县",
            "value": "420526",
            "parentVal": "420500"
          },
          {
            "text": "秭归县",
            "value": "420527",
            "parentVal": "420500"
          },
          {
            "text": "长阳土家族自治县",
            "value": "420528",
            "parentVal": "420500"
          },
          {
            "text": "五峰土家族自治县",
            "value": "420529",
            "parentVal": "420500"
          },
          {
            "text": "宜都市",
            "value": "420581",
            "parentVal": "420500"
          },
          {
            "text": "当阳市",
            "value": "420582",
            "parentVal": "420500"
          },
          {
            "text": "枝江市",
            "value": "420583",
            "parentVal": "420500"
          },
          {
            "text": "市辖区",
            "value": "420601",
            "parentVal": "420600"
          },
          {
            "text": "襄城区",
            "value": "420602",
            "parentVal": "420600"
          },
          {
            "text": "樊城区",
            "value": "420606",
            "parentVal": "420600"
          },
          {
            "text": "襄州区",
            "value": "420607",
            "parentVal": "420600"
          },
          {
            "text": "南漳县",
            "value": "420624",
            "parentVal": "420600"
          },
          {
            "text": "谷城县",
            "value": "420625",
            "parentVal": "420600"
          },
          {
            "text": "保康县",
            "value": "420626",
            "parentVal": "420600"
          },
          {
            "text": "老河口市",
            "value": "420682",
            "parentVal": "420600"
          },
          {
            "text": "枣阳市",
            "value": "420683",
            "parentVal": "420600"
          },
          {
            "text": "宜城市",
            "value": "420684",
            "parentVal": "420600"
          },
          {
            "text": "市辖区",
            "value": "420701",
            "parentVal": "420700"
          },
          {
            "text": "梁子湖区",
            "value": "420702",
            "parentVal": "420700"
          },
          {
            "text": "华容区",
            "value": "420703",
            "parentVal": "420700"
          },
          {
            "text": "鄂城区",
            "value": "420704",
            "parentVal": "420700"
          },
          {
            "text": "市辖区",
            "value": "420801",
            "parentVal": "420800"
          },
          {
            "text": "东宝区",
            "value": "420802",
            "parentVal": "420800"
          },
          {
            "text": "掇刀区",
            "value": "420804",
            "parentVal": "420800"
          },
          {
            "text": "京山县",
            "value": "420821",
            "parentVal": "420800"
          },
          {
            "text": "沙洋县",
            "value": "420822",
            "parentVal": "420800"
          },
          {
            "text": "钟祥市",
            "value": "420881",
            "parentVal": "420800"
          },
          {
            "text": "市辖区",
            "value": "420901",
            "parentVal": "420900"
          },
          {
            "text": "孝南区",
            "value": "420902",
            "parentVal": "420900"
          },
          {
            "text": "孝昌县",
            "value": "420921",
            "parentVal": "420900"
          },
          {
            "text": "大悟县",
            "value": "420922",
            "parentVal": "420900"
          },
          {
            "text": "云梦县",
            "value": "420923",
            "parentVal": "420900"
          },
          {
            "text": "应城市",
            "value": "420981",
            "parentVal": "420900"
          },
          {
            "text": "安陆市",
            "value": "420982",
            "parentVal": "420900"
          },
          {
            "text": "汉川市",
            "value": "420984",
            "parentVal": "420900"
          },
          {
            "text": "市辖区",
            "value": "421001",
            "parentVal": "421000"
          },
          {
            "text": "沙市区",
            "value": "421002",
            "parentVal": "421000"
          },
          {
            "text": "荆州区",
            "value": "421003",
            "parentVal": "421000"
          },
          {
            "text": "公安县",
            "value": "421022",
            "parentVal": "421000"
          },
          {
            "text": "监利县",
            "value": "421023",
            "parentVal": "421000"
          },
          {
            "text": "江陵县",
            "value": "421024",
            "parentVal": "421000"
          },
          {
            "text": "石首市",
            "value": "421081",
            "parentVal": "421000"
          },
          {
            "text": "洪湖市",
            "value": "421083",
            "parentVal": "421000"
          },
          {
            "text": "松滋市",
            "value": "421087",
            "parentVal": "421000"
          },
          {
            "text": "市辖区",
            "value": "421101",
            "parentVal": "421100"
          },
          {
            "text": "黄州区",
            "value": "421102",
            "parentVal": "421100"
          },
          {
            "text": "团风县",
            "value": "421121",
            "parentVal": "421100"
          },
          {
            "text": "红安县",
            "value": "421122",
            "parentVal": "421100"
          },
          {
            "text": "罗田县",
            "value": "421123",
            "parentVal": "421100"
          },
          {
            "text": "英山县",
            "value": "421124",
            "parentVal": "421100"
          },
          {
            "text": "浠水县",
            "value": "421125",
            "parentVal": "421100"
          },
          {
            "text": "蕲春县",
            "value": "421126",
            "parentVal": "421100"
          },
          {
            "text": "黄梅县",
            "value": "421127",
            "parentVal": "421100"
          },
          {
            "text": "麻城市",
            "value": "421181",
            "parentVal": "421100"
          },
          {
            "text": "武穴市",
            "value": "421182",
            "parentVal": "421100"
          },
          {
            "text": "市辖区",
            "value": "421201",
            "parentVal": "421200"
          },
          {
            "text": "咸安区",
            "value": "421202",
            "parentVal": "421200"
          },
          {
            "text": "嘉鱼县",
            "value": "421221",
            "parentVal": "421200"
          },
          {
            "text": "通城县",
            "value": "421222",
            "parentVal": "421200"
          },
          {
            "text": "崇阳县",
            "value": "421223",
            "parentVal": "421200"
          },
          {
            "text": "通山县",
            "value": "421224",
            "parentVal": "421200"
          },
          {
            "text": "赤壁市",
            "value": "421281",
            "parentVal": "421200"
          },
          {
            "text": "市辖区",
            "value": "421301",
            "parentVal": "421300"
          },
          {
            "text": "曾都区",
            "value": "421303",
            "parentVal": "421300"
          },
          {
            "text": "随县",
            "value": "421321",
            "parentVal": "421300"
          },
          {
            "text": "广水市",
            "value": "421381",
            "parentVal": "421300"
          },
          {
            "text": "恩施市",
            "value": "422801",
            "parentVal": "422800"
          },
          {
            "text": "利川市",
            "value": "422802",
            "parentVal": "422800"
          },
          {
            "text": "建始县",
            "value": "422822",
            "parentVal": "422800"
          },
          {
            "text": "巴东县",
            "value": "422823",
            "parentVal": "422800"
          },
          {
            "text": "宣恩县",
            "value": "422825",
            "parentVal": "422800"
          },
          {
            "text": "咸丰县",
            "value": "422826",
            "parentVal": "422800"
          },
          {
            "text": "来凤县",
            "value": "422827",
            "parentVal": "422800"
          },
          {
            "text": "鹤峰县",
            "value": "422828",
            "parentVal": "422800"
          },
          {
            "text": "仙桃市",
            "value": "429004",
            "parentVal": "429000"
          },
          {
            "text": "潜江市",
            "value": "429005",
            "parentVal": "429000"
          },
          {
            "text": "天门市",
            "value": "429006",
            "parentVal": "429000"
          },
          {
            "text": "神农架林区",
            "value": "429021",
            "parentVal": "429000"
          },
          {
            "text": "市辖区",
            "value": "430101",
            "parentVal": "430100"
          },
          {
            "text": "芙蓉区",
            "value": "430102",
            "parentVal": "430100"
          },
          {
            "text": "天心区",
            "value": "430103",
            "parentVal": "430100"
          },
          {
            "text": "岳麓区",
            "value": "430104",
            "parentVal": "430100"
          },
          {
            "text": "开福区",
            "value": "430105",
            "parentVal": "430100"
          },
          {
            "text": "雨花区",
            "value": "430111",
            "parentVal": "430100"
          },
          {
            "text": "望城区",
            "value": "430112",
            "parentVal": "430100"
          },
          {
            "text": "长沙县",
            "value": "430121",
            "parentVal": "430100"
          },
          {
            "text": "宁乡县",
            "value": "430124",
            "parentVal": "430100"
          },
          {
            "text": "浏阳市",
            "value": "430181",
            "parentVal": "430100"
          },
          {
            "text": "市辖区",
            "value": "430201",
            "parentVal": "430200"
          },
          {
            "text": "荷塘区",
            "value": "430202",
            "parentVal": "430200"
          },
          {
            "text": "芦淞区",
            "value": "430203",
            "parentVal": "430200"
          },
          {
            "text": "石峰区",
            "value": "430204",
            "parentVal": "430200"
          },
          {
            "text": "天元区",
            "value": "430211",
            "parentVal": "430200"
          },
          {
            "text": "株洲县",
            "value": "430221",
            "parentVal": "430200"
          },
          {
            "text": "攸县",
            "value": "430223",
            "parentVal": "430200"
          },
          {
            "text": "茶陵县",
            "value": "430224",
            "parentVal": "430200"
          },
          {
            "text": "炎陵县",
            "value": "430225",
            "parentVal": "430200"
          },
          {
            "text": "醴陵市",
            "value": "430281",
            "parentVal": "430200"
          },
          {
            "text": "市辖区",
            "value": "430301",
            "parentVal": "430300"
          },
          {
            "text": "雨湖区",
            "value": "430302",
            "parentVal": "430300"
          },
          {
            "text": "岳塘区",
            "value": "430304",
            "parentVal": "430300"
          },
          {
            "text": "湘潭县",
            "value": "430321",
            "parentVal": "430300"
          },
          {
            "text": "湘乡市",
            "value": "430381",
            "parentVal": "430300"
          },
          {
            "text": "韶山市",
            "value": "430382",
            "parentVal": "430300"
          },
          {
            "text": "市辖区",
            "value": "430401",
            "parentVal": "430400"
          },
          {
            "text": "珠晖区",
            "value": "430405",
            "parentVal": "430400"
          },
          {
            "text": "雁峰区",
            "value": "430406",
            "parentVal": "430400"
          },
          {
            "text": "石鼓区",
            "value": "430407",
            "parentVal": "430400"
          },
          {
            "text": "蒸湘区",
            "value": "430408",
            "parentVal": "430400"
          },
          {
            "text": "南岳区",
            "value": "430412",
            "parentVal": "430400"
          },
          {
            "text": "衡阳县",
            "value": "430421",
            "parentVal": "430400"
          },
          {
            "text": "衡南县",
            "value": "430422",
            "parentVal": "430400"
          },
          {
            "text": "衡山县",
            "value": "430423",
            "parentVal": "430400"
          },
          {
            "text": "衡东县",
            "value": "430424",
            "parentVal": "430400"
          },
          {
            "text": "祁东县",
            "value": "430426",
            "parentVal": "430400"
          },
          {
            "text": "耒阳市",
            "value": "430481",
            "parentVal": "430400"
          },
          {
            "text": "常宁市",
            "value": "430482",
            "parentVal": "430400"
          },
          {
            "text": "市辖区",
            "value": "430501",
            "parentVal": "430500"
          },
          {
            "text": "双清区",
            "value": "430502",
            "parentVal": "430500"
          },
          {
            "text": "大祥区",
            "value": "430503",
            "parentVal": "430500"
          },
          {
            "text": "北塔区",
            "value": "430511",
            "parentVal": "430500"
          },
          {
            "text": "邵东县",
            "value": "430521",
            "parentVal": "430500"
          },
          {
            "text": "新邵县",
            "value": "430522",
            "parentVal": "430500"
          },
          {
            "text": "邵阳县",
            "value": "430523",
            "parentVal": "430500"
          },
          {
            "text": "隆回县",
            "value": "430524",
            "parentVal": "430500"
          },
          {
            "text": "洞口县",
            "value": "430525",
            "parentVal": "430500"
          },
          {
            "text": "绥宁县",
            "value": "430527",
            "parentVal": "430500"
          },
          {
            "text": "新宁县",
            "value": "430528",
            "parentVal": "430500"
          },
          {
            "text": "城步苗族自治县",
            "value": "430529",
            "parentVal": "430500"
          },
          {
            "text": "武冈市",
            "value": "430581",
            "parentVal": "430500"
          },
          {
            "text": "市辖区",
            "value": "430601",
            "parentVal": "430600"
          },
          {
            "text": "岳阳楼区",
            "value": "430602",
            "parentVal": "430600"
          },
          {
            "text": "云溪区",
            "value": "430603",
            "parentVal": "430600"
          },
          {
            "text": "君山区",
            "value": "430611",
            "parentVal": "430600"
          },
          {
            "text": "岳阳县",
            "value": "430621",
            "parentVal": "430600"
          },
          {
            "text": "华容县",
            "value": "430623",
            "parentVal": "430600"
          },
          {
            "text": "湘阴县",
            "value": "430624",
            "parentVal": "430600"
          },
          {
            "text": "平江县",
            "value": "430626",
            "parentVal": "430600"
          },
          {
            "text": "汨罗市",
            "value": "430681",
            "parentVal": "430600"
          },
          {
            "text": "临湘市",
            "value": "430682",
            "parentVal": "430600"
          },
          {
            "text": "市辖区",
            "value": "430701",
            "parentVal": "430700"
          },
          {
            "text": "武陵区",
            "value": "430702",
            "parentVal": "430700"
          },
          {
            "text": "鼎城区",
            "value": "430703",
            "parentVal": "430700"
          },
          {
            "text": "安乡县",
            "value": "430721",
            "parentVal": "430700"
          },
          {
            "text": "汉寿县",
            "value": "430722",
            "parentVal": "430700"
          },
          {
            "text": "澧县",
            "value": "430723",
            "parentVal": "430700"
          },
          {
            "text": "临澧县",
            "value": "430724",
            "parentVal": "430700"
          },
          {
            "text": "桃源县",
            "value": "430725",
            "parentVal": "430700"
          },
          {
            "text": "石门县",
            "value": "430726",
            "parentVal": "430700"
          },
          {
            "text": "津市市",
            "value": "430781",
            "parentVal": "430700"
          },
          {
            "text": "市辖区",
            "value": "430801",
            "parentVal": "430800"
          },
          {
            "text": "永定区",
            "value": "430802",
            "parentVal": "430800"
          },
          {
            "text": "武陵源区",
            "value": "430811",
            "parentVal": "430800"
          },
          {
            "text": "慈利县",
            "value": "430821",
            "parentVal": "430800"
          },
          {
            "text": "桑植县",
            "value": "430822",
            "parentVal": "430800"
          },
          {
            "text": "市辖区",
            "value": "430901",
            "parentVal": "430900"
          },
          {
            "text": "资阳区",
            "value": "430902",
            "parentVal": "430900"
          },
          {
            "text": "赫山区",
            "value": "430903",
            "parentVal": "430900"
          },
          {
            "text": "南县",
            "value": "430921",
            "parentVal": "430900"
          },
          {
            "text": "桃江县",
            "value": "430922",
            "parentVal": "430900"
          },
          {
            "text": "安化县",
            "value": "430923",
            "parentVal": "430900"
          },
          {
            "text": "沅江市",
            "value": "430981",
            "parentVal": "430900"
          },
          {
            "text": "市辖区",
            "value": "431001",
            "parentVal": "431000"
          },
          {
            "text": "北湖区",
            "value": "431002",
            "parentVal": "431000"
          },
          {
            "text": "苏仙区",
            "value": "431003",
            "parentVal": "431000"
          },
          {
            "text": "桂阳县",
            "value": "431021",
            "parentVal": "431000"
          },
          {
            "text": "宜章县",
            "value": "431022",
            "parentVal": "431000"
          },
          {
            "text": "永兴县",
            "value": "431023",
            "parentVal": "431000"
          },
          {
            "text": "嘉禾县",
            "value": "431024",
            "parentVal": "431000"
          },
          {
            "text": "临武县",
            "value": "431025",
            "parentVal": "431000"
          },
          {
            "text": "汝城县",
            "value": "431026",
            "parentVal": "431000"
          },
          {
            "text": "桂东县",
            "value": "431027",
            "parentVal": "431000"
          },
          {
            "text": "安仁县",
            "value": "431028",
            "parentVal": "431000"
          },
          {
            "text": "资兴市",
            "value": "431081",
            "parentVal": "431000"
          },
          {
            "text": "市辖区",
            "value": "431101",
            "parentVal": "431100"
          },
          {
            "text": "零陵区",
            "value": "431102",
            "parentVal": "431100"
          },
          {
            "text": "冷水滩区",
            "value": "431103",
            "parentVal": "431100"
          },
          {
            "text": "祁阳县",
            "value": "431121",
            "parentVal": "431100"
          },
          {
            "text": "东安县",
            "value": "431122",
            "parentVal": "431100"
          },
          {
            "text": "双牌县",
            "value": "431123",
            "parentVal": "431100"
          },
          {
            "text": "道县",
            "value": "431124",
            "parentVal": "431100"
          },
          {
            "text": "江永县",
            "value": "431125",
            "parentVal": "431100"
          },
          {
            "text": "宁远县",
            "value": "431126",
            "parentVal": "431100"
          },
          {
            "text": "蓝山县",
            "value": "431127",
            "parentVal": "431100"
          },
          {
            "text": "新田县",
            "value": "431128",
            "parentVal": "431100"
          },
          {
            "text": "江华瑶族自治县",
            "value": "431129",
            "parentVal": "431100"
          },
          {
            "text": "市辖区",
            "value": "431201",
            "parentVal": "431200"
          },
          {
            "text": "鹤城区",
            "value": "431202",
            "parentVal": "431200"
          },
          {
            "text": "中方县",
            "value": "431221",
            "parentVal": "431200"
          },
          {
            "text": "沅陵县",
            "value": "431222",
            "parentVal": "431200"
          },
          {
            "text": "辰溪县",
            "value": "431223",
            "parentVal": "431200"
          },
          {
            "text": "溆浦县",
            "value": "431224",
            "parentVal": "431200"
          },
          {
            "text": "会同县",
            "value": "431225",
            "parentVal": "431200"
          },
          {
            "text": "麻阳苗族自治县",
            "value": "431226",
            "parentVal": "431200"
          },
          {
            "text": "新晃侗族自治县",
            "value": "431227",
            "parentVal": "431200"
          },
          {
            "text": "芷江侗族自治县",
            "value": "431228",
            "parentVal": "431200"
          },
          {
            "text": "靖州苗族侗族自治县",
            "value": "431229",
            "parentVal": "431200"
          },
          {
            "text": "通道侗族自治县",
            "value": "431230",
            "parentVal": "431200"
          },
          {
            "text": "洪江市",
            "value": "431281",
            "parentVal": "431200"
          },
          {
            "text": "市辖区",
            "value": "431301",
            "parentVal": "431300"
          },
          {
            "text": "娄星区",
            "value": "431302",
            "parentVal": "431300"
          },
          {
            "text": "双峰县",
            "value": "431321",
            "parentVal": "431300"
          },
          {
            "text": "新化县",
            "value": "431322",
            "parentVal": "431300"
          },
          {
            "text": "冷水江市",
            "value": "431381",
            "parentVal": "431300"
          },
          {
            "text": "涟源市",
            "value": "431382",
            "parentVal": "431300"
          },
          {
            "text": "吉首市",
            "value": "433101",
            "parentVal": "433100"
          },
          {
            "text": "泸溪县",
            "value": "433122",
            "parentVal": "433100"
          },
          {
            "text": "凤凰县",
            "value": "433123",
            "parentVal": "433100"
          },
          {
            "text": "花垣县",
            "value": "433124",
            "parentVal": "433100"
          },
          {
            "text": "保靖县",
            "value": "433125",
            "parentVal": "433100"
          },
          {
            "text": "古丈县",
            "value": "433126",
            "parentVal": "433100"
          },
          {
            "text": "永顺县",
            "value": "433127",
            "parentVal": "433100"
          },
          {
            "text": "龙山县",
            "value": "433130",
            "parentVal": "433100"
          },
          {
            "text": "市辖区",
            "value": "440101",
            "parentVal": "440100"
          },
          {
            "text": "荔湾区",
            "value": "440103",
            "parentVal": "440100"
          },
          {
            "text": "越秀区",
            "value": "440104",
            "parentVal": "440100"
          },
          {
            "text": "海珠区",
            "value": "440105",
            "parentVal": "440100"
          },
          {
            "text": "天河区",
            "value": "440106",
            "parentVal": "440100"
          },
          {
            "text": "白云区",
            "value": "440111",
            "parentVal": "440100"
          },
          {
            "text": "黄埔区",
            "value": "440112",
            "parentVal": "440100"
          },
          {
            "text": "番禺区",
            "value": "440113",
            "parentVal": "440100"
          },
          {
            "text": "花都区",
            "value": "440114",
            "parentVal": "440100"
          },
          {
            "text": "南沙区",
            "value": "440115",
            "parentVal": "440100"
          },
          {
            "text": "萝岗区",
            "value": "440116",
            "parentVal": "440100"
          },
          {
            "text": "增城市",
            "value": "440183",
            "parentVal": "440100"
          },
          {
            "text": "从化市",
            "value": "440184",
            "parentVal": "440100"
          },
          {
            "text": "市辖区",
            "value": "440201",
            "parentVal": "440200"
          },
          {
            "text": "武江区",
            "value": "440203",
            "parentVal": "440200"
          },
          {
            "text": "浈江区",
            "value": "440204",
            "parentVal": "440200"
          },
          {
            "text": "曲江区",
            "value": "440205",
            "parentVal": "440200"
          },
          {
            "text": "始兴县",
            "value": "440222",
            "parentVal": "440200"
          },
          {
            "text": "仁化县",
            "value": "440224",
            "parentVal": "440200"
          },
          {
            "text": "翁源县",
            "value": "440229",
            "parentVal": "440200"
          },
          {
            "text": "乳源瑶族自治县",
            "value": "440232",
            "parentVal": "440200"
          },
          {
            "text": "新丰县",
            "value": "440233",
            "parentVal": "440200"
          },
          {
            "text": "乐昌市",
            "value": "440281",
            "parentVal": "440200"
          },
          {
            "text": "南雄市",
            "value": "440282",
            "parentVal": "440200"
          },
          {
            "text": "市辖区",
            "value": "440301",
            "parentVal": "440300"
          },
          {
            "text": "罗湖区",
            "value": "440303",
            "parentVal": "440300"
          },
          {
            "text": "福田区",
            "value": "440304",
            "parentVal": "440300"
          },
          {
            "text": "南山区",
            "value": "440305",
            "parentVal": "440300"
          },
          {
            "text": "宝安区",
            "value": "440306",
            "parentVal": "440300"
          },
          {
            "text": "龙岗区",
            "value": "440307",
            "parentVal": "440300"
          },
          {
            "text": "盐田区",
            "value": "440308",
            "parentVal": "440300"
          },
          {
            "text": "市辖区",
            "value": "440401",
            "parentVal": "440400"
          },
          {
            "text": "香洲区",
            "value": "440402",
            "parentVal": "440400"
          },
          {
            "text": "斗门区",
            "value": "440403",
            "parentVal": "440400"
          },
          {
            "text": "金湾区",
            "value": "440404",
            "parentVal": "440400"
          },
          {
            "text": "市辖区",
            "value": "440501",
            "parentVal": "440500"
          },
          {
            "text": "龙湖区",
            "value": "440507",
            "parentVal": "440500"
          },
          {
            "text": "金平区",
            "value": "440511",
            "parentVal": "440500"
          },
          {
            "text": "濠江区",
            "value": "440512",
            "parentVal": "440500"
          },
          {
            "text": "潮阳区",
            "value": "440513",
            "parentVal": "440500"
          },
          {
            "text": "潮南区",
            "value": "440514",
            "parentVal": "440500"
          },
          {
            "text": "澄海区",
            "value": "440515",
            "parentVal": "440500"
          },
          {
            "text": "南澳县",
            "value": "440523",
            "parentVal": "440500"
          },
          {
            "text": "市辖区",
            "value": "440601",
            "parentVal": "440600"
          },
          {
            "text": "禅城区",
            "value": "440604",
            "parentVal": "440600"
          },
          {
            "text": "南海区",
            "value": "440605",
            "parentVal": "440600"
          },
          {
            "text": "顺德区",
            "value": "440606",
            "parentVal": "440600"
          },
          {
            "text": "三水区",
            "value": "440607",
            "parentVal": "440600"
          },
          {
            "text": "高明区",
            "value": "440608",
            "parentVal": "440600"
          },
          {
            "text": "市辖区",
            "value": "440701",
            "parentVal": "440700"
          },
          {
            "text": "蓬江区",
            "value": "440703",
            "parentVal": "440700"
          },
          {
            "text": "江海区",
            "value": "440704",
            "parentVal": "440700"
          },
          {
            "text": "新会区",
            "value": "440705",
            "parentVal": "440700"
          },
          {
            "text": "台山市",
            "value": "440781",
            "parentVal": "440700"
          },
          {
            "text": "开平市",
            "value": "440783",
            "parentVal": "440700"
          },
          {
            "text": "鹤山市",
            "value": "440784",
            "parentVal": "440700"
          },
          {
            "text": "恩平市",
            "value": "440785",
            "parentVal": "440700"
          },
          {
            "text": "市辖区",
            "value": "440801",
            "parentVal": "440800"
          },
          {
            "text": "赤坎区",
            "value": "440802",
            "parentVal": "440800"
          },
          {
            "text": "霞山区",
            "value": "440803",
            "parentVal": "440800"
          },
          {
            "text": "坡头区",
            "value": "440804",
            "parentVal": "440800"
          },
          {
            "text": "麻章区",
            "value": "440811",
            "parentVal": "440800"
          },
          {
            "text": "遂溪县",
            "value": "440823",
            "parentVal": "440800"
          },
          {
            "text": "徐闻县",
            "value": "440825",
            "parentVal": "440800"
          },
          {
            "text": "廉江市",
            "value": "440881",
            "parentVal": "440800"
          },
          {
            "text": "雷州市",
            "value": "440882",
            "parentVal": "440800"
          },
          {
            "text": "吴川市",
            "value": "440883",
            "parentVal": "440800"
          },
          {
            "text": "市辖区",
            "value": "440901",
            "parentVal": "440900"
          },
          {
            "text": "茂南区",
            "value": "440902",
            "parentVal": "440900"
          },
          {
            "text": "茂港区",
            "value": "440903",
            "parentVal": "440900"
          },
          {
            "text": "电白县",
            "value": "440923",
            "parentVal": "440900"
          },
          {
            "text": "高州市",
            "value": "440981",
            "parentVal": "440900"
          },
          {
            "text": "化州市",
            "value": "440982",
            "parentVal": "440900"
          },
          {
            "text": "信宜市",
            "value": "440983",
            "parentVal": "440900"
          },
          {
            "text": "市辖区",
            "value": "441201",
            "parentVal": "441200"
          },
          {
            "text": "端州区",
            "value": "441202",
            "parentVal": "441200"
          },
          {
            "text": "鼎湖区",
            "value": "441203",
            "parentVal": "441200"
          },
          {
            "text": "广宁县",
            "value": "441223",
            "parentVal": "441200"
          },
          {
            "text": "怀集县",
            "value": "441224",
            "parentVal": "441200"
          },
          {
            "text": "封开县",
            "value": "441225",
            "parentVal": "441200"
          },
          {
            "text": "德庆县",
            "value": "441226",
            "parentVal": "441200"
          },
          {
            "text": "高要市",
            "value": "441283",
            "parentVal": "441200"
          },
          {
            "text": "四会市",
            "value": "441284",
            "parentVal": "441200"
          },
          {
            "text": "市辖区",
            "value": "441301",
            "parentVal": "441300"
          },
          {
            "text": "惠城区",
            "value": "441302",
            "parentVal": "441300"
          },
          {
            "text": "惠阳区",
            "value": "441303",
            "parentVal": "441300"
          },
          {
            "text": "博罗县",
            "value": "441322",
            "parentVal": "441300"
          },
          {
            "text": "惠东县",
            "value": "441323",
            "parentVal": "441300"
          },
          {
            "text": "龙门县",
            "value": "441324",
            "parentVal": "441300"
          },
          {
            "text": "市辖区",
            "value": "441401",
            "parentVal": "441400"
          },
          {
            "text": "梅江区",
            "value": "441402",
            "parentVal": "441400"
          },
          {
            "text": "梅县",
            "value": "441421",
            "parentVal": "441400"
          },
          {
            "text": "大埔县",
            "value": "441422",
            "parentVal": "441400"
          },
          {
            "text": "丰顺县",
            "value": "441423",
            "parentVal": "441400"
          },
          {
            "text": "五华县",
            "value": "441424",
            "parentVal": "441400"
          },
          {
            "text": "平远县",
            "value": "441426",
            "parentVal": "441400"
          },
          {
            "text": "蕉岭县",
            "value": "441427",
            "parentVal": "441400"
          },
          {
            "text": "兴宁市",
            "value": "441481",
            "parentVal": "441400"
          },
          {
            "text": "市辖区",
            "value": "441501",
            "parentVal": "441500"
          },
          {
            "text": "城区",
            "value": "441502",
            "parentVal": "441500"
          },
          {
            "text": "海丰县",
            "value": "441521",
            "parentVal": "441500"
          },
          {
            "text": "陆河县",
            "value": "441523",
            "parentVal": "441500"
          },
          {
            "text": "陆丰市",
            "value": "441581",
            "parentVal": "441500"
          },
          {
            "text": "市辖区",
            "value": "441601",
            "parentVal": "441600"
          },
          {
            "text": "源城区",
            "value": "441602",
            "parentVal": "441600"
          },
          {
            "text": "紫金县",
            "value": "441621",
            "parentVal": "441600"
          },
          {
            "text": "龙川县",
            "value": "441622",
            "parentVal": "441600"
          },
          {
            "text": "连平县",
            "value": "441623",
            "parentVal": "441600"
          },
          {
            "text": "和平县",
            "value": "441624",
            "parentVal": "441600"
          },
          {
            "text": "东源县",
            "value": "441625",
            "parentVal": "441600"
          },
          {
            "text": "市辖区",
            "value": "441701",
            "parentVal": "441700"
          },
          {
            "text": "江城区",
            "value": "441702",
            "parentVal": "441700"
          },
          {
            "text": "阳西县",
            "value": "441721",
            "parentVal": "441700"
          },
          {
            "text": "阳东县",
            "value": "441723",
            "parentVal": "441700"
          },
          {
            "text": "阳春市",
            "value": "441781",
            "parentVal": "441700"
          },
          {
            "text": "市辖区",
            "value": "441801",
            "parentVal": "441800"
          },
          {
            "text": "清城区",
            "value": "441802",
            "parentVal": "441800"
          },
          {
            "text": "清新区",
            "value": "441803",
            "parentVal": "441800"
          },
          {
            "text": "佛冈县",
            "value": "441821",
            "parentVal": "441800"
          },
          {
            "text": "阳山县",
            "value": "441823",
            "parentVal": "441800"
          },
          {
            "text": "连山壮族瑶族自治县",
            "value": "441825",
            "parentVal": "441800"
          },
          {
            "text": "连南瑶族自治县",
            "value": "441826",
            "parentVal": "441800"
          },
          {
            "text": "英德市",
            "value": "441881",
            "parentVal": "441800"
          },
          {
            "text": "连州市",
            "value": "441882",
            "parentVal": "441800"
          },
          {
            "text": "市辖区",
            "value": "445101",
            "parentVal": "445100"
          },
          {
            "text": "湘桥区",
            "value": "445102",
            "parentVal": "445100"
          },
          {
            "text": "潮安区",
            "value": "445103",
            "parentVal": "445100"
          },
          {
            "text": "饶平县",
            "value": "445122",
            "parentVal": "445100"
          },
          {
            "text": "市辖区",
            "value": "445201",
            "parentVal": "445200"
          },
          {
            "text": "榕城区",
            "value": "445202",
            "parentVal": "445200"
          },
          {
            "text": "揭东区",
            "value": "445203",
            "parentVal": "445200"
          },
          {
            "text": "揭西县",
            "value": "445222",
            "parentVal": "445200"
          },
          {
            "text": "惠来县",
            "value": "445224",
            "parentVal": "445200"
          },
          {
            "text": "普宁市",
            "value": "445281",
            "parentVal": "445200"
          },
          {
            "text": "市辖区",
            "value": "445301",
            "parentVal": "445300"
          },
          {
            "text": "云城区",
            "value": "445302",
            "parentVal": "445300"
          },
          {
            "text": "新兴县",
            "value": "445321",
            "parentVal": "445300"
          },
          {
            "text": "郁南县",
            "value": "445322",
            "parentVal": "445300"
          },
          {
            "text": "云安县",
            "value": "445323",
            "parentVal": "445300"
          },
          {
            "text": "罗定市",
            "value": "445381",
            "parentVal": "445300"
          },
          {
            "text": "市辖区",
            "value": "450101",
            "parentVal": "450100"
          },
          {
            "text": "兴宁区",
            "value": "450102",
            "parentVal": "450100"
          },
          {
            "text": "青秀区",
            "value": "450103",
            "parentVal": "450100"
          },
          {
            "text": "江南区",
            "value": "450105",
            "parentVal": "450100"
          },
          {
            "text": "西乡塘区",
            "value": "450107",
            "parentVal": "450100"
          },
          {
            "text": "良庆区",
            "value": "450108",
            "parentVal": "450100"
          },
          {
            "text": "邕宁区",
            "value": "450109",
            "parentVal": "450100"
          },
          {
            "text": "武鸣县",
            "value": "450122",
            "parentVal": "450100"
          },
          {
            "text": "隆安县",
            "value": "450123",
            "parentVal": "450100"
          },
          {
            "text": "马山县",
            "value": "450124",
            "parentVal": "450100"
          },
          {
            "text": "上林县",
            "value": "450125",
            "parentVal": "450100"
          },
          {
            "text": "宾阳县",
            "value": "450126",
            "parentVal": "450100"
          },
          {
            "text": "横县",
            "value": "450127",
            "parentVal": "450100"
          },
          {
            "text": "市辖区",
            "value": "450201",
            "parentVal": "450200"
          },
          {
            "text": "城中区",
            "value": "450202",
            "parentVal": "450200"
          },
          {
            "text": "鱼峰区",
            "value": "450203",
            "parentVal": "450200"
          },
          {
            "text": "柳南区",
            "value": "450204",
            "parentVal": "450200"
          },
          {
            "text": "柳北区",
            "value": "450205",
            "parentVal": "450200"
          },
          {
            "text": "柳江县",
            "value": "450221",
            "parentVal": "450200"
          },
          {
            "text": "柳城县",
            "value": "450222",
            "parentVal": "450200"
          },
          {
            "text": "鹿寨县",
            "value": "450223",
            "parentVal": "450200"
          },
          {
            "text": "融安县",
            "value": "450224",
            "parentVal": "450200"
          },
          {
            "text": "融水苗族自治县",
            "value": "450225",
            "parentVal": "450200"
          },
          {
            "text": "三江侗族自治县",
            "value": "450226",
            "parentVal": "450200"
          },
          {
            "text": "市辖区",
            "value": "450301",
            "parentVal": "450300"
          },
          {
            "text": "秀峰区",
            "value": "450302",
            "parentVal": "450300"
          },
          {
            "text": "叠彩区",
            "value": "450303",
            "parentVal": "450300"
          },
          {
            "text": "象山区",
            "value": "450304",
            "parentVal": "450300"
          },
          {
            "text": "七星区",
            "value": "450305",
            "parentVal": "450300"
          },
          {
            "text": "雁山区",
            "value": "450311",
            "parentVal": "450300"
          },
          {
            "text": "临桂区",
            "value": "450312",
            "parentVal": "450300"
          },
          {
            "text": "阳朔县",
            "value": "450321",
            "parentVal": "450300"
          },
          {
            "text": "灵川县",
            "value": "450323",
            "parentVal": "450300"
          },
          {
            "text": "全州县",
            "value": "450324",
            "parentVal": "450300"
          },
          {
            "text": "兴安县",
            "value": "450325",
            "parentVal": "450300"
          },
          {
            "text": "永福县",
            "value": "450326",
            "parentVal": "450300"
          },
          {
            "text": "灌阳县",
            "value": "450327",
            "parentVal": "450300"
          },
          {
            "text": "龙胜各族自治县",
            "value": "450328",
            "parentVal": "450300"
          },
          {
            "text": "资源县",
            "value": "450329",
            "parentVal": "450300"
          },
          {
            "text": "平乐县",
            "value": "450330",
            "parentVal": "450300"
          },
          {
            "text": "荔浦县",
            "value": "450331",
            "parentVal": "450300"
          },
          {
            "text": "恭城瑶族自治县",
            "value": "450332",
            "parentVal": "450300"
          },
          {
            "text": "市辖区",
            "value": "450401",
            "parentVal": "450400"
          },
          {
            "text": "万秀区",
            "value": "450403",
            "parentVal": "450400"
          },
          {
            "text": "长洲区",
            "value": "450405",
            "parentVal": "450400"
          },
          {
            "text": "龙圩区",
            "value": "450406",
            "parentVal": "450400"
          },
          {
            "text": "苍梧县",
            "value": "450421",
            "parentVal": "450400"
          },
          {
            "text": "藤县",
            "value": "450422",
            "parentVal": "450400"
          },
          {
            "text": "蒙山县",
            "value": "450423",
            "parentVal": "450400"
          },
          {
            "text": "岑溪市",
            "value": "450481",
            "parentVal": "450400"
          },
          {
            "text": "市辖区",
            "value": "450501",
            "parentVal": "450500"
          },
          {
            "text": "海城区",
            "value": "450502",
            "parentVal": "450500"
          },
          {
            "text": "银海区",
            "value": "450503",
            "parentVal": "450500"
          },
          {
            "text": "铁山港区",
            "value": "450512",
            "parentVal": "450500"
          },
          {
            "text": "合浦县",
            "value": "450521",
            "parentVal": "450500"
          },
          {
            "text": "市辖区",
            "value": "450601",
            "parentVal": "450600"
          },
          {
            "text": "港口区",
            "value": "450602",
            "parentVal": "450600"
          },
          {
            "text": "防城区",
            "value": "450603",
            "parentVal": "450600"
          },
          {
            "text": "上思县",
            "value": "450621",
            "parentVal": "450600"
          },
          {
            "text": "东兴市",
            "value": "450681",
            "parentVal": "450600"
          },
          {
            "text": "市辖区",
            "value": "450701",
            "parentVal": "450700"
          },
          {
            "text": "钦南区",
            "value": "450702",
            "parentVal": "450700"
          },
          {
            "text": "钦北区",
            "value": "450703",
            "parentVal": "450700"
          },
          {
            "text": "灵山县",
            "value": "450721",
            "parentVal": "450700"
          },
          {
            "text": "浦北县",
            "value": "450722",
            "parentVal": "450700"
          },
          {
            "text": "市辖区",
            "value": "450801",
            "parentVal": "450800"
          },
          {
            "text": "港北区",
            "value": "450802",
            "parentVal": "450800"
          },
          {
            "text": "港南区",
            "value": "450803",
            "parentVal": "450800"
          },
          {
            "text": "覃塘区",
            "value": "450804",
            "parentVal": "450800"
          },
          {
            "text": "平南县",
            "value": "450821",
            "parentVal": "450800"
          },
          {
            "text": "桂平市",
            "value": "450881",
            "parentVal": "450800"
          },
          {
            "text": "市辖区",
            "value": "450901",
            "parentVal": "450900"
          },
          {
            "text": "玉州区",
            "value": "450902",
            "parentVal": "450900"
          },
          {
            "text": "福绵区",
            "value": "450903",
            "parentVal": "450900"
          },
          {
            "text": "容县",
            "value": "450921",
            "parentVal": "450900"
          },
          {
            "text": "陆川县",
            "value": "450922",
            "parentVal": "450900"
          },
          {
            "text": "博白县",
            "value": "450923",
            "parentVal": "450900"
          },
          {
            "text": "兴业县",
            "value": "450924",
            "parentVal": "450900"
          },
          {
            "text": "北流市",
            "value": "450981",
            "parentVal": "450900"
          },
          {
            "text": "市辖区",
            "value": "451001",
            "parentVal": "451000"
          },
          {
            "text": "右江区",
            "value": "451002",
            "parentVal": "451000"
          },
          {
            "text": "田阳县",
            "value": "451021",
            "parentVal": "451000"
          },
          {
            "text": "田东县",
            "value": "451022",
            "parentVal": "451000"
          },
          {
            "text": "平果县",
            "value": "451023",
            "parentVal": "451000"
          },
          {
            "text": "德保县",
            "value": "451024",
            "parentVal": "451000"
          },
          {
            "text": "靖西县",
            "value": "451025",
            "parentVal": "451000"
          },
          {
            "text": "那坡县",
            "value": "451026",
            "parentVal": "451000"
          },
          {
            "text": "凌云县",
            "value": "451027",
            "parentVal": "451000"
          },
          {
            "text": "乐业县",
            "value": "451028",
            "parentVal": "451000"
          },
          {
            "text": "田林县",
            "value": "451029",
            "parentVal": "451000"
          },
          {
            "text": "西林县",
            "value": "451030",
            "parentVal": "451000"
          },
          {
            "text": "隆林各族自治县",
            "value": "451031",
            "parentVal": "451000"
          },
          {
            "text": "市辖区",
            "value": "451101",
            "parentVal": "451100"
          },
          {
            "text": "八步区",
            "value": "451102",
            "parentVal": "451100"
          },
          {
            "text": "昭平县",
            "value": "451121",
            "parentVal": "451100"
          },
          {
            "text": "钟山县",
            "value": "451122",
            "parentVal": "451100"
          },
          {
            "text": "富川瑶族自治县",
            "value": "451123",
            "parentVal": "451100"
          },
          {
            "text": "市辖区",
            "value": "451201",
            "parentVal": "451200"
          },
          {
            "text": "金城江区",
            "value": "451202",
            "parentVal": "451200"
          },
          {
            "text": "南丹县",
            "value": "451221",
            "parentVal": "451200"
          },
          {
            "text": "天峨县",
            "value": "451222",
            "parentVal": "451200"
          },
          {
            "text": "凤山县",
            "value": "451223",
            "parentVal": "451200"
          },
          {
            "text": "东兰县",
            "value": "451224",
            "parentVal": "451200"
          },
          {
            "text": "罗城仫佬族自治县",
            "value": "451225",
            "parentVal": "451200"
          },
          {
            "text": "环江毛南族自治县",
            "value": "451226",
            "parentVal": "451200"
          },
          {
            "text": "巴马瑶族自治县",
            "value": "451227",
            "parentVal": "451200"
          },
          {
            "text": "都安瑶族自治县",
            "value": "451228",
            "parentVal": "451200"
          },
          {
            "text": "大化瑶族自治县",
            "value": "451229",
            "parentVal": "451200"
          },
          {
            "text": "宜州市",
            "value": "451281",
            "parentVal": "451200"
          },
          {
            "text": "市辖区",
            "value": "451301",
            "parentVal": "451300"
          },
          {
            "text": "兴宾区",
            "value": "451302",
            "parentVal": "451300"
          },
          {
            "text": "忻城县",
            "value": "451321",
            "parentVal": "451300"
          },
          {
            "text": "象州县",
            "value": "451322",
            "parentVal": "451300"
          },
          {
            "text": "武宣县",
            "value": "451323",
            "parentVal": "451300"
          },
          {
            "text": "金秀瑶族自治县",
            "value": "451324",
            "parentVal": "451300"
          },
          {
            "text": "合山市",
            "value": "451381",
            "parentVal": "451300"
          },
          {
            "text": "市辖区",
            "value": "451401",
            "parentVal": "451400"
          },
          {
            "text": "江州区",
            "value": "451402",
            "parentVal": "451400"
          },
          {
            "text": "扶绥县",
            "value": "451421",
            "parentVal": "451400"
          },
          {
            "text": "宁明县",
            "value": "451422",
            "parentVal": "451400"
          },
          {
            "text": "龙州县",
            "value": "451423",
            "parentVal": "451400"
          },
          {
            "text": "大新县",
            "value": "451424",
            "parentVal": "451400"
          },
          {
            "text": "天等县",
            "value": "451425",
            "parentVal": "451400"
          },
          {
            "text": "凭祥市",
            "value": "451481",
            "parentVal": "451400"
          },
          {
            "text": "市辖区",
            "value": "460101",
            "parentVal": "460100"
          },
          {
            "text": "秀英区",
            "value": "460105",
            "parentVal": "460100"
          },
          {
            "text": "龙华区",
            "value": "460106",
            "parentVal": "460100"
          },
          {
            "text": "琼山区",
            "value": "460107",
            "parentVal": "460100"
          },
          {
            "text": "美兰区",
            "value": "460108",
            "parentVal": "460100"
          },
          {
            "text": "市辖区",
            "value": "460201",
            "parentVal": "460200"
          },
          {
            "text": "西沙群岛",
            "value": "460321",
            "parentVal": "460300"
          },
          {
            "text": "南沙群岛",
            "value": "460322",
            "parentVal": "460300"
          },
          {
            "text": "中沙群岛的岛礁及其海域",
            "value": "460323",
            "parentVal": "460300"
          },
          {
            "text": "五指山市",
            "value": "469001",
            "parentVal": "469000"
          },
          {
            "text": "琼海市",
            "value": "469002",
            "parentVal": "469000"
          },
          {
            "text": "儋州市",
            "value": "469003",
            "parentVal": "469000"
          },
          {
            "text": "文昌市",
            "value": "469005",
            "parentVal": "469000"
          },
          {
            "text": "万宁市",
            "value": "469006",
            "parentVal": "469000"
          },
          {
            "text": "东方市",
            "value": "469007",
            "parentVal": "469000"
          },
          {
            "text": "定安县",
            "value": "469021",
            "parentVal": "469000"
          },
          {
            "text": "屯昌县",
            "value": "469022",
            "parentVal": "469000"
          },
          {
            "text": "澄迈县",
            "value": "469023",
            "parentVal": "469000"
          },
          {
            "text": "临高县",
            "value": "469024",
            "parentVal": "469000"
          },
          {
            "text": "白沙黎族自治县",
            "value": "469025",
            "parentVal": "469000"
          },
          {
            "text": "昌江黎族自治县",
            "value": "469026",
            "parentVal": "469000"
          },
          {
            "text": "乐东黎族自治县",
            "value": "469027",
            "parentVal": "469000"
          },
          {
            "text": "陵水黎族自治县",
            "value": "469028",
            "parentVal": "469000"
          },
          {
            "text": "保亭黎族苗族自治县",
            "value": "469029",
            "parentVal": "469000"
          },
          {
            "text": "琼中黎族苗族自治县",
            "value": "469030",
            "parentVal": "469000"
          },
          {
            "text": "万州区",
            "value": "500101",
            "parentVal": "500100"
          },
          {
            "text": "涪陵区",
            "value": "500102",
            "parentVal": "500100"
          },
          {
            "text": "渝中区",
            "value": "500103",
            "parentVal": "500100"
          },
          {
            "text": "大渡口区",
            "value": "500104",
            "parentVal": "500100"
          },
          {
            "text": "江北区",
            "value": "500105",
            "parentVal": "500100"
          },
          {
            "text": "沙坪坝区",
            "value": "500106",
            "parentVal": "500100"
          },
          {
            "text": "九龙坡区",
            "value": "500107",
            "parentVal": "500100"
          },
          {
            "text": "南岸区",
            "value": "500108",
            "parentVal": "500100"
          },
          {
            "text": "北碚区",
            "value": "500109",
            "parentVal": "500100"
          },
          {
            "text": "綦江区",
            "value": "500110",
            "parentVal": "500100"
          },
          {
            "text": "大足区",
            "value": "500111",
            "parentVal": "500100"
          },
          {
            "text": "渝北区",
            "value": "500112",
            "parentVal": "500100"
          },
          {
            "text": "巴南区",
            "value": "500113",
            "parentVal": "500100"
          },
          {
            "text": "黔江区",
            "value": "500114",
            "parentVal": "500100"
          },
          {
            "text": "长寿区",
            "value": "500115",
            "parentVal": "500100"
          },
          {
            "text": "江津区",
            "value": "500116",
            "parentVal": "500100"
          },
          {
            "text": "合川区",
            "value": "500117",
            "parentVal": "500100"
          },
          {
            "text": "永川区",
            "value": "500118",
            "parentVal": "500100"
          },
          {
            "text": "南川区",
            "value": "500119",
            "parentVal": "500100"
          },
          {
            "text": "潼南县",
            "value": "500223",
            "parentVal": "500200"
          },
          {
            "text": "铜梁县",
            "value": "500224",
            "parentVal": "500200"
          },
          {
            "text": "荣昌县",
            "value": "500226",
            "parentVal": "500200"
          },
          {
            "text": "璧山县",
            "value": "500227",
            "parentVal": "500200"
          },
          {
            "text": "梁平县",
            "value": "500228",
            "parentVal": "500200"
          },
          {
            "text": "城口县",
            "value": "500229",
            "parentVal": "500200"
          },
          {
            "text": "丰都县",
            "value": "500230",
            "parentVal": "500200"
          },
          {
            "text": "垫江县",
            "value": "500231",
            "parentVal": "500200"
          },
          {
            "text": "武隆县",
            "value": "500232",
            "parentVal": "500200"
          },
          {
            "text": "忠县",
            "value": "500233",
            "parentVal": "500200"
          },
          {
            "text": "开县",
            "value": "500234",
            "parentVal": "500200"
          },
          {
            "text": "云阳县",
            "value": "500235",
            "parentVal": "500200"
          },
          {
            "text": "奉节县",
            "value": "500236",
            "parentVal": "500200"
          },
          {
            "text": "巫山县",
            "value": "500237",
            "parentVal": "500200"
          },
          {
            "text": "巫溪县",
            "value": "500238",
            "parentVal": "500200"
          },
          {
            "text": "石柱土家族自治县",
            "value": "500240",
            "parentVal": "500200"
          },
          {
            "text": "秀山土家族苗族自治县",
            "value": "500241",
            "parentVal": "500200"
          },
          {
            "text": "酉阳土家族苗族自治县",
            "value": "500242",
            "parentVal": "500200"
          },
          {
            "text": "彭水苗族土家族自治县",
            "value": "500243",
            "parentVal": "500200"
          },
          {
            "text": "市辖区",
            "value": "510101",
            "parentVal": "510100"
          },
          {
            "text": "锦江区",
            "value": "510104",
            "parentVal": "510100"
          },
          {
            "text": "青羊区",
            "value": "510105",
            "parentVal": "510100"
          },
          {
            "text": "金牛区",
            "value": "510106",
            "parentVal": "510100"
          },
          {
            "text": "武侯区",
            "value": "510107",
            "parentVal": "510100"
          },
          {
            "text": "成华区",
            "value": "510108",
            "parentVal": "510100"
          },
          {
            "text": "龙泉驿区",
            "value": "510112",
            "parentVal": "510100"
          },
          {
            "text": "青白江区",
            "value": "510113",
            "parentVal": "510100"
          },
          {
            "text": "新都区",
            "value": "510114",
            "parentVal": "510100"
          },
          {
            "text": "温江区",
            "value": "510115",
            "parentVal": "510100"
          },
          {
            "text": "金堂县",
            "value": "510121",
            "parentVal": "510100"
          },
          {
            "text": "双流县",
            "value": "510122",
            "parentVal": "510100"
          },
          {
            "text": "郫县",
            "value": "510124",
            "parentVal": "510100"
          },
          {
            "text": "大邑县",
            "value": "510129",
            "parentVal": "510100"
          },
          {
            "text": "蒲江县",
            "value": "510131",
            "parentVal": "510100"
          },
          {
            "text": "新津县",
            "value": "510132",
            "parentVal": "510100"
          },
          {
            "text": "都江堰市",
            "value": "510181",
            "parentVal": "510100"
          },
          {
            "text": "彭州市",
            "value": "510182",
            "parentVal": "510100"
          },
          {
            "text": "邛崃市",
            "value": "510183",
            "parentVal": "510100"
          },
          {
            "text": "崇州市",
            "value": "510184",
            "parentVal": "510100"
          },
          {
            "text": "市辖区",
            "value": "510301",
            "parentVal": "510300"
          },
          {
            "text": "自流井区",
            "value": "510302",
            "parentVal": "510300"
          },
          {
            "text": "贡井区",
            "value": "510303",
            "parentVal": "510300"
          },
          {
            "text": "大安区",
            "value": "510304",
            "parentVal": "510300"
          },
          {
            "text": "沿滩区",
            "value": "510311",
            "parentVal": "510300"
          },
          {
            "text": "荣县",
            "value": "510321",
            "parentVal": "510300"
          },
          {
            "text": "富顺县",
            "value": "510322",
            "parentVal": "510300"
          },
          {
            "text": "市辖区",
            "value": "510401",
            "parentVal": "510400"
          },
          {
            "text": "东区",
            "value": "510402",
            "parentVal": "510400"
          },
          {
            "text": "西区",
            "value": "510403",
            "parentVal": "510400"
          },
          {
            "text": "仁和区",
            "value": "510411",
            "parentVal": "510400"
          },
          {
            "text": "米易县",
            "value": "510421",
            "parentVal": "510400"
          },
          {
            "text": "盐边县",
            "value": "510422",
            "parentVal": "510400"
          },
          {
            "text": "市辖区",
            "value": "510501",
            "parentVal": "510500"
          },
          {
            "text": "江阳区",
            "value": "510502",
            "parentVal": "510500"
          },
          {
            "text": "纳溪区",
            "value": "510503",
            "parentVal": "510500"
          },
          {
            "text": "龙马潭区",
            "value": "510504",
            "parentVal": "510500"
          },
          {
            "text": "泸县",
            "value": "510521",
            "parentVal": "510500"
          },
          {
            "text": "合江县",
            "value": "510522",
            "parentVal": "510500"
          },
          {
            "text": "叙永县",
            "value": "510524",
            "parentVal": "510500"
          },
          {
            "text": "古蔺县",
            "value": "510525",
            "parentVal": "510500"
          },
          {
            "text": "市辖区",
            "value": "510601",
            "parentVal": "510600"
          },
          {
            "text": "旌阳区",
            "value": "510603",
            "parentVal": "510600"
          },
          {
            "text": "中江县",
            "value": "510623",
            "parentVal": "510600"
          },
          {
            "text": "罗江县",
            "value": "510626",
            "parentVal": "510600"
          },
          {
            "text": "广汉市",
            "value": "510681",
            "parentVal": "510600"
          },
          {
            "text": "什邡市",
            "value": "510682",
            "parentVal": "510600"
          },
          {
            "text": "绵竹市",
            "value": "510683",
            "parentVal": "510600"
          },
          {
            "text": "市辖区",
            "value": "510701",
            "parentVal": "510700"
          },
          {
            "text": "涪城区",
            "value": "510703",
            "parentVal": "510700"
          },
          {
            "text": "游仙区",
            "value": "510704",
            "parentVal": "510700"
          },
          {
            "text": "三台县",
            "value": "510722",
            "parentVal": "510700"
          },
          {
            "text": "盐亭县",
            "value": "510723",
            "parentVal": "510700"
          },
          {
            "text": "安县",
            "value": "510724",
            "parentVal": "510700"
          },
          {
            "text": "梓潼县",
            "value": "510725",
            "parentVal": "510700"
          },
          {
            "text": "北川羌族自治县",
            "value": "510726",
            "parentVal": "510700"
          },
          {
            "text": "平武县",
            "value": "510727",
            "parentVal": "510700"
          },
          {
            "text": "江油市",
            "value": "510781",
            "parentVal": "510700"
          },
          {
            "text": "市辖区",
            "value": "510801",
            "parentVal": "510800"
          },
          {
            "text": "利州区",
            "value": "510802",
            "parentVal": "510800"
          },
          {
            "text": "元坝区",
            "value": "510811",
            "parentVal": "510800"
          },
          {
            "text": "朝天区",
            "value": "510812",
            "parentVal": "510800"
          },
          {
            "text": "旺苍县",
            "value": "510821",
            "parentVal": "510800"
          },
          {
            "text": "青川县",
            "value": "510822",
            "parentVal": "510800"
          },
          {
            "text": "剑阁县",
            "value": "510823",
            "parentVal": "510800"
          },
          {
            "text": "苍溪县",
            "value": "510824",
            "parentVal": "510800"
          },
          {
            "text": "市辖区",
            "value": "510901",
            "parentVal": "510900"
          },
          {
            "text": "船山区",
            "value": "510903",
            "parentVal": "510900"
          },
          {
            "text": "安居区",
            "value": "510904",
            "parentVal": "510900"
          },
          {
            "text": "蓬溪县",
            "value": "510921",
            "parentVal": "510900"
          },
          {
            "text": "射洪县",
            "value": "510922",
            "parentVal": "510900"
          },
          {
            "text": "大英县",
            "value": "510923",
            "parentVal": "510900"
          },
          {
            "text": "市辖区",
            "value": "511001",
            "parentVal": "511000"
          },
          {
            "text": "市中区",
            "value": "511002",
            "parentVal": "511000"
          },
          {
            "text": "东兴区",
            "value": "511011",
            "parentVal": "511000"
          },
          {
            "text": "威远县",
            "value": "511024",
            "parentVal": "511000"
          },
          {
            "text": "资中县",
            "value": "511025",
            "parentVal": "511000"
          },
          {
            "text": "隆昌县",
            "value": "511028",
            "parentVal": "511000"
          },
          {
            "text": "市辖区",
            "value": "511101",
            "parentVal": "511100"
          },
          {
            "text": "市中区",
            "value": "511102",
            "parentVal": "511100"
          },
          {
            "text": "沙湾区",
            "value": "511111",
            "parentVal": "511100"
          },
          {
            "text": "五通桥区",
            "value": "511112",
            "parentVal": "511100"
          },
          {
            "text": "金口河区",
            "value": "511113",
            "parentVal": "511100"
          },
          {
            "text": "犍为县",
            "value": "511123",
            "parentVal": "511100"
          },
          {
            "text": "井研县",
            "value": "511124",
            "parentVal": "511100"
          },
          {
            "text": "夹江县",
            "value": "511126",
            "parentVal": "511100"
          },
          {
            "text": "沐川县",
            "value": "511129",
            "parentVal": "511100"
          },
          {
            "text": "峨边彝族自治县",
            "value": "511132",
            "parentVal": "511100"
          },
          {
            "text": "马边彝族自治县",
            "value": "511133",
            "parentVal": "511100"
          },
          {
            "text": "峨眉山市",
            "value": "511181",
            "parentVal": "511100"
          },
          {
            "text": "市辖区",
            "value": "511301",
            "parentVal": "511300"
          },
          {
            "text": "顺庆区",
            "value": "511302",
            "parentVal": "511300"
          },
          {
            "text": "高坪区",
            "value": "511303",
            "parentVal": "511300"
          },
          {
            "text": "嘉陵区",
            "value": "511304",
            "parentVal": "511300"
          },
          {
            "text": "南部县",
            "value": "511321",
            "parentVal": "511300"
          },
          {
            "text": "营山县",
            "value": "511322",
            "parentVal": "511300"
          },
          {
            "text": "蓬安县",
            "value": "511323",
            "parentVal": "511300"
          },
          {
            "text": "仪陇县",
            "value": "511324",
            "parentVal": "511300"
          },
          {
            "text": "西充县",
            "value": "511325",
            "parentVal": "511300"
          },
          {
            "text": "阆中市",
            "value": "511381",
            "parentVal": "511300"
          },
          {
            "text": "市辖区",
            "value": "511401",
            "parentVal": "511400"
          },
          {
            "text": "东坡区",
            "value": "511402",
            "parentVal": "511400"
          },
          {
            "text": "仁寿县",
            "value": "511421",
            "parentVal": "511400"
          },
          {
            "text": "彭山县",
            "value": "511422",
            "parentVal": "511400"
          },
          {
            "text": "洪雅县",
            "value": "511423",
            "parentVal": "511400"
          },
          {
            "text": "丹棱县",
            "value": "511424",
            "parentVal": "511400"
          },
          {
            "text": "青神县",
            "value": "511425",
            "parentVal": "511400"
          },
          {
            "text": "市辖区",
            "value": "511501",
            "parentVal": "511500"
          },
          {
            "text": "翠屏区",
            "value": "511502",
            "parentVal": "511500"
          },
          {
            "text": "南溪区",
            "value": "511503",
            "parentVal": "511500"
          },
          {
            "text": "宜宾县",
            "value": "511521",
            "parentVal": "511500"
          },
          {
            "text": "江安县",
            "value": "511523",
            "parentVal": "511500"
          },
          {
            "text": "长宁县",
            "value": "511524",
            "parentVal": "511500"
          },
          {
            "text": "高县",
            "value": "511525",
            "parentVal": "511500"
          },
          {
            "text": "珙县",
            "value": "511526",
            "parentVal": "511500"
          },
          {
            "text": "筠连县",
            "value": "511527",
            "parentVal": "511500"
          },
          {
            "text": "兴文县",
            "value": "511528",
            "parentVal": "511500"
          },
          {
            "text": "屏山县",
            "value": "511529",
            "parentVal": "511500"
          },
          {
            "text": "市辖区",
            "value": "511601",
            "parentVal": "511600"
          },
          {
            "text": "广安区",
            "value": "511602",
            "parentVal": "511600"
          },
          {
            "text": "前锋区",
            "value": "511603",
            "parentVal": "511600"
          },
          {
            "text": "岳池县",
            "value": "511621",
            "parentVal": "511600"
          },
          {
            "text": "武胜县",
            "value": "511622",
            "parentVal": "511600"
          },
          {
            "text": "邻水县",
            "value": "511623",
            "parentVal": "511600"
          },
          {
            "text": "华蓥市",
            "value": "511681",
            "parentVal": "511600"
          },
          {
            "text": "市辖区",
            "value": "511701",
            "parentVal": "511700"
          },
          {
            "text": "通川区",
            "value": "511702",
            "parentVal": "511700"
          },
          {
            "text": "达川区",
            "value": "511703",
            "parentVal": "511700"
          },
          {
            "text": "宣汉县",
            "value": "511722",
            "parentVal": "511700"
          },
          {
            "text": "开江县",
            "value": "511723",
            "parentVal": "511700"
          },
          {
            "text": "大竹县",
            "value": "511724",
            "parentVal": "511700"
          },
          {
            "text": "渠县",
            "value": "511725",
            "parentVal": "511700"
          },
          {
            "text": "万源市",
            "value": "511781",
            "parentVal": "511700"
          },
          {
            "text": "市辖区",
            "value": "511801",
            "parentVal": "511800"
          },
          {
            "text": "雨城区",
            "value": "511802",
            "parentVal": "511800"
          },
          {
            "text": "名山区",
            "value": "511803",
            "parentVal": "511800"
          },
          {
            "text": "荥经县",
            "value": "511822",
            "parentVal": "511800"
          },
          {
            "text": "汉源县",
            "value": "511823",
            "parentVal": "511800"
          },
          {
            "text": "石棉县",
            "value": "511824",
            "parentVal": "511800"
          },
          {
            "text": "天全县",
            "value": "511825",
            "parentVal": "511800"
          },
          {
            "text": "芦山县",
            "value": "511826",
            "parentVal": "511800"
          },
          {
            "text": "宝兴县",
            "value": "511827",
            "parentVal": "511800"
          },
          {
            "text": "市辖区",
            "value": "511901",
            "parentVal": "511900"
          },
          {
            "text": "巴州区",
            "value": "511902",
            "parentVal": "511900"
          },
          {
            "text": "恩阳区",
            "value": "511903",
            "parentVal": "511900"
          },
          {
            "text": "通江县",
            "value": "511921",
            "parentVal": "511900"
          },
          {
            "text": "南江县",
            "value": "511922",
            "parentVal": "511900"
          },
          {
            "text": "平昌县",
            "value": "511923",
            "parentVal": "511900"
          },
          {
            "text": "市辖区",
            "value": "512001",
            "parentVal": "512000"
          },
          {
            "text": "雁江区",
            "value": "512002",
            "parentVal": "512000"
          },
          {
            "text": "安岳县",
            "value": "512021",
            "parentVal": "512000"
          },
          {
            "text": "乐至县",
            "value": "512022",
            "parentVal": "512000"
          },
          {
            "text": "简阳市",
            "value": "512081",
            "parentVal": "512000"
          },
          {
            "text": "汶川县",
            "value": "513221",
            "parentVal": "513200"
          },
          {
            "text": "理县",
            "value": "513222",
            "parentVal": "513200"
          },
          {
            "text": "茂县",
            "value": "513223",
            "parentVal": "513200"
          },
          {
            "text": "松潘县",
            "value": "513224",
            "parentVal": "513200"
          },
          {
            "text": "九寨沟县",
            "value": "513225",
            "parentVal": "513200"
          },
          {
            "text": "金川县",
            "value": "513226",
            "parentVal": "513200"
          },
          {
            "text": "小金县",
            "value": "513227",
            "parentVal": "513200"
          },
          {
            "text": "黑水县",
            "value": "513228",
            "parentVal": "513200"
          },
          {
            "text": "马尔康县",
            "value": "513229",
            "parentVal": "513200"
          },
          {
            "text": "壤塘县",
            "value": "513230",
            "parentVal": "513200"
          },
          {
            "text": "阿坝县",
            "value": "513231",
            "parentVal": "513200"
          },
          {
            "text": "若尔盖县",
            "value": "513232",
            "parentVal": "513200"
          },
          {
            "text": "红原县",
            "value": "513233",
            "parentVal": "513200"
          },
          {
            "text": "康定县",
            "value": "513321",
            "parentVal": "513300"
          },
          {
            "text": "泸定县",
            "value": "513322",
            "parentVal": "513300"
          },
          {
            "text": "丹巴县",
            "value": "513323",
            "parentVal": "513300"
          },
          {
            "text": "九龙县",
            "value": "513324",
            "parentVal": "513300"
          },
          {
            "text": "雅江县",
            "value": "513325",
            "parentVal": "513300"
          },
          {
            "text": "道孚县",
            "value": "513326",
            "parentVal": "513300"
          },
          {
            "text": "炉霍县",
            "value": "513327",
            "parentVal": "513300"
          },
          {
            "text": "甘孜县",
            "value": "513328",
            "parentVal": "513300"
          },
          {
            "text": "新龙县",
            "value": "513329",
            "parentVal": "513300"
          },
          {
            "text": "德格县",
            "value": "513330",
            "parentVal": "513300"
          },
          {
            "text": "白玉县",
            "value": "513331",
            "parentVal": "513300"
          },
          {
            "text": "石渠县",
            "value": "513332",
            "parentVal": "513300"
          },
          {
            "text": "色达县",
            "value": "513333",
            "parentVal": "513300"
          },
          {
            "text": "理塘县",
            "value": "513334",
            "parentVal": "513300"
          },
          {
            "text": "巴塘县",
            "value": "513335",
            "parentVal": "513300"
          },
          {
            "text": "乡城县",
            "value": "513336",
            "parentVal": "513300"
          },
          {
            "text": "稻城县",
            "value": "513337",
            "parentVal": "513300"
          },
          {
            "text": "得荣县",
            "value": "513338",
            "parentVal": "513300"
          },
          {
            "text": "西昌市",
            "value": "513401",
            "parentVal": "513400"
          },
          {
            "text": "木里藏族自治县",
            "value": "513422",
            "parentVal": "513400"
          },
          {
            "text": "盐源县",
            "value": "513423",
            "parentVal": "513400"
          },
          {
            "text": "德昌县",
            "value": "513424",
            "parentVal": "513400"
          },
          {
            "text": "会理县",
            "value": "513425",
            "parentVal": "513400"
          },
          {
            "text": "会东县",
            "value": "513426",
            "parentVal": "513400"
          },
          {
            "text": "宁南县",
            "value": "513427",
            "parentVal": "513400"
          },
          {
            "text": "普格县",
            "value": "513428",
            "parentVal": "513400"
          },
          {
            "text": "布拖县",
            "value": "513429",
            "parentVal": "513400"
          },
          {
            "text": "金阳县",
            "value": "513430",
            "parentVal": "513400"
          },
          {
            "text": "昭觉县",
            "value": "513431",
            "parentVal": "513400"
          },
          {
            "text": "喜德县",
            "value": "513432",
            "parentVal": "513400"
          },
          {
            "text": "冕宁县",
            "value": "513433",
            "parentVal": "513400"
          },
          {
            "text": "越西县",
            "value": "513434",
            "parentVal": "513400"
          },
          {
            "text": "甘洛县",
            "value": "513435",
            "parentVal": "513400"
          },
          {
            "text": "美姑县",
            "value": "513436",
            "parentVal": "513400"
          },
          {
            "text": "雷波县",
            "value": "513437",
            "parentVal": "513400"
          },
          {
            "text": "市辖区",
            "value": "520101",
            "parentVal": "520100"
          },
          {
            "text": "南明区",
            "value": "520102",
            "parentVal": "520100"
          },
          {
            "text": "云岩区",
            "value": "520103",
            "parentVal": "520100"
          },
          {
            "text": "花溪区",
            "value": "520111",
            "parentVal": "520100"
          },
          {
            "text": "乌当区",
            "value": "520112",
            "parentVal": "520100"
          },
          {
            "text": "白云区",
            "value": "520113",
            "parentVal": "520100"
          },
          {
            "text": "观山湖区",
            "value": "520115",
            "parentVal": "520100"
          },
          {
            "text": "开阳县",
            "value": "520121",
            "parentVal": "520100"
          },
          {
            "text": "息烽县",
            "value": "520122",
            "parentVal": "520100"
          },
          {
            "text": "修文县",
            "value": "520123",
            "parentVal": "520100"
          },
          {
            "text": "清镇市",
            "value": "520181",
            "parentVal": "520100"
          },
          {
            "text": "钟山区",
            "value": "520201",
            "parentVal": "520200"
          },
          {
            "text": "六枝特区",
            "value": "520203",
            "parentVal": "520200"
          },
          {
            "text": "水城县",
            "value": "520221",
            "parentVal": "520200"
          },
          {
            "text": "盘县",
            "value": "520222",
            "parentVal": "520200"
          },
          {
            "text": "市辖区",
            "value": "520301",
            "parentVal": "520300"
          },
          {
            "text": "红花岗区",
            "value": "520302",
            "parentVal": "520300"
          },
          {
            "text": "汇川区",
            "value": "520303",
            "parentVal": "520300"
          },
          {
            "text": "遵义县",
            "value": "520321",
            "parentVal": "520300"
          },
          {
            "text": "桐梓县",
            "value": "520322",
            "parentVal": "520300"
          },
          {
            "text": "绥阳县",
            "value": "520323",
            "parentVal": "520300"
          },
          {
            "text": "正安县",
            "value": "520324",
            "parentVal": "520300"
          },
          {
            "text": "道真仡佬族苗族自治县",
            "value": "520325",
            "parentVal": "520300"
          },
          {
            "text": "务川仡佬族苗族自治县",
            "value": "520326",
            "parentVal": "520300"
          },
          {
            "text": "凤冈县",
            "value": "520327",
            "parentVal": "520300"
          },
          {
            "text": "湄潭县",
            "value": "520328",
            "parentVal": "520300"
          },
          {
            "text": "余庆县",
            "value": "520329",
            "parentVal": "520300"
          },
          {
            "text": "习水县",
            "value": "520330",
            "parentVal": "520300"
          },
          {
            "text": "赤水市",
            "value": "520381",
            "parentVal": "520300"
          },
          {
            "text": "仁怀市",
            "value": "520382",
            "parentVal": "520300"
          },
          {
            "text": "市辖区",
            "value": "520401",
            "parentVal": "520400"
          },
          {
            "text": "西秀区",
            "value": "520402",
            "parentVal": "520400"
          },
          {
            "text": "平坝县",
            "value": "520421",
            "parentVal": "520400"
          },
          {
            "text": "普定县",
            "value": "520422",
            "parentVal": "520400"
          },
          {
            "text": "镇宁布依族苗族自治县",
            "value": "520423",
            "parentVal": "520400"
          },
          {
            "text": "关岭布依族苗族自治县",
            "value": "520424",
            "parentVal": "520400"
          },
          {
            "text": "紫云苗族布依族自治县",
            "value": "520425",
            "parentVal": "520400"
          },
          {
            "text": "市辖区",
            "value": "520501",
            "parentVal": "520500"
          },
          {
            "text": "七星关区",
            "value": "520502",
            "parentVal": "520500"
          },
          {
            "text": "大方县",
            "value": "520521",
            "parentVal": "520500"
          },
          {
            "text": "黔西县",
            "value": "520522",
            "parentVal": "520500"
          },
          {
            "text": "金沙县",
            "value": "520523",
            "parentVal": "520500"
          },
          {
            "text": "织金县",
            "value": "520524",
            "parentVal": "520500"
          },
          {
            "text": "纳雍县",
            "value": "520525",
            "parentVal": "520500"
          },
          {
            "text": "威宁彝族回族苗族自治县",
            "value": "520526",
            "parentVal": "520500"
          },
          {
            "text": "赫章县",
            "value": "520527",
            "parentVal": "520500"
          },
          {
            "text": "市辖区",
            "value": "520601",
            "parentVal": "520600"
          },
          {
            "text": "碧江区",
            "value": "520602",
            "parentVal": "520600"
          },
          {
            "text": "万山区",
            "value": "520603",
            "parentVal": "520600"
          },
          {
            "text": "江口县",
            "value": "520621",
            "parentVal": "520600"
          },
          {
            "text": "玉屏侗族自治县",
            "value": "520622",
            "parentVal": "520600"
          },
          {
            "text": "石阡县",
            "value": "520623",
            "parentVal": "520600"
          },
          {
            "text": "思南县",
            "value": "520624",
            "parentVal": "520600"
          },
          {
            "text": "印江土家族苗族自治县",
            "value": "520625",
            "parentVal": "520600"
          },
          {
            "text": "德江县",
            "value": "520626",
            "parentVal": "520600"
          },
          {
            "text": "沿河土家族自治县",
            "value": "520627",
            "parentVal": "520600"
          },
          {
            "text": "松桃苗族自治县",
            "value": "520628",
            "parentVal": "520600"
          },
          {
            "text": "兴义市",
            "value": "522301",
            "parentVal": "522300"
          },
          {
            "text": "兴仁县",
            "value": "522322",
            "parentVal": "522300"
          },
          {
            "text": "普安县",
            "value": "522323",
            "parentVal": "522300"
          },
          {
            "text": "晴隆县",
            "value": "522324",
            "parentVal": "522300"
          },
          {
            "text": "贞丰县",
            "value": "522325",
            "parentVal": "522300"
          },
          {
            "text": "望谟县",
            "value": "522326",
            "parentVal": "522300"
          },
          {
            "text": "册亨县",
            "value": "522327",
            "parentVal": "522300"
          },
          {
            "text": "安龙县",
            "value": "522328",
            "parentVal": "522300"
          },
          {
            "text": "凯里市",
            "value": "522601",
            "parentVal": "522600"
          },
          {
            "text": "黄平县",
            "value": "522622",
            "parentVal": "522600"
          },
          {
            "text": "施秉县",
            "value": "522623",
            "parentVal": "522600"
          },
          {
            "text": "三穗县",
            "value": "522624",
            "parentVal": "522600"
          },
          {
            "text": "镇远县",
            "value": "522625",
            "parentVal": "522600"
          },
          {
            "text": "岑巩县",
            "value": "522626",
            "parentVal": "522600"
          },
          {
            "text": "天柱县",
            "value": "522627",
            "parentVal": "522600"
          },
          {
            "text": "锦屏县",
            "value": "522628",
            "parentVal": "522600"
          },
          {
            "text": "剑河县",
            "value": "522629",
            "parentVal": "522600"
          },
          {
            "text": "台江县",
            "value": "522630",
            "parentVal": "522600"
          },
          {
            "text": "黎平县",
            "value": "522631",
            "parentVal": "522600"
          },
          {
            "text": "榕江县",
            "value": "522632",
            "parentVal": "522600"
          },
          {
            "text": "从江县",
            "value": "522633",
            "parentVal": "522600"
          },
          {
            "text": "雷山县",
            "value": "522634",
            "parentVal": "522600"
          },
          {
            "text": "麻江县",
            "value": "522635",
            "parentVal": "522600"
          },
          {
            "text": "丹寨县",
            "value": "522636",
            "parentVal": "522600"
          },
          {
            "text": "都匀市",
            "value": "522701",
            "parentVal": "522700"
          },
          {
            "text": "福泉市",
            "value": "522702",
            "parentVal": "522700"
          },
          {
            "text": "荔波县",
            "value": "522722",
            "parentVal": "522700"
          },
          {
            "text": "贵定县",
            "value": "522723",
            "parentVal": "522700"
          },
          {
            "text": "瓮安县",
            "value": "522725",
            "parentVal": "522700"
          },
          {
            "text": "独山县",
            "value": "522726",
            "parentVal": "522700"
          },
          {
            "text": "平塘县",
            "value": "522727",
            "parentVal": "522700"
          },
          {
            "text": "罗甸县",
            "value": "522728",
            "parentVal": "522700"
          },
          {
            "text": "长顺县",
            "value": "522729",
            "parentVal": "522700"
          },
          {
            "text": "龙里县",
            "value": "522730",
            "parentVal": "522700"
          },
          {
            "text": "惠水县",
            "value": "522731",
            "parentVal": "522700"
          },
          {
            "text": "三都水族自治县",
            "value": "522732",
            "parentVal": "522700"
          },
          {
            "text": "市辖区",
            "value": "530101",
            "parentVal": "530100"
          },
          {
            "text": "五华区",
            "value": "530102",
            "parentVal": "530100"
          },
          {
            "text": "盘龙区",
            "value": "530103",
            "parentVal": "530100"
          },
          {
            "text": "官渡区",
            "value": "530111",
            "parentVal": "530100"
          },
          {
            "text": "西山区",
            "value": "530112",
            "parentVal": "530100"
          },
          {
            "text": "东川区",
            "value": "530113",
            "parentVal": "530100"
          },
          {
            "text": "呈贡区",
            "value": "530114",
            "parentVal": "530100"
          },
          {
            "text": "晋宁县",
            "value": "530122",
            "parentVal": "530100"
          },
          {
            "text": "富民县",
            "value": "530124",
            "parentVal": "530100"
          },
          {
            "text": "宜良县",
            "value": "530125",
            "parentVal": "530100"
          },
          {
            "text": "石林彝族自治县",
            "value": "530126",
            "parentVal": "530100"
          },
          {
            "text": "嵩明县",
            "value": "530127",
            "parentVal": "530100"
          },
          {
            "text": "禄劝彝族苗族自治县",
            "value": "530128",
            "parentVal": "530100"
          },
          {
            "text": "寻甸回族彝族自治县",
            "value": "530129",
            "parentVal": "530100"
          },
          {
            "text": "安宁市",
            "value": "530181",
            "parentVal": "530100"
          },
          {
            "text": "市辖区",
            "value": "530301",
            "parentVal": "530300"
          },
          {
            "text": "麒麟区",
            "value": "530302",
            "parentVal": "530300"
          },
          {
            "text": "马龙县",
            "value": "530321",
            "parentVal": "530300"
          },
          {
            "text": "陆良县",
            "value": "530322",
            "parentVal": "530300"
          },
          {
            "text": "师宗县",
            "value": "530323",
            "parentVal": "530300"
          },
          {
            "text": "罗平县",
            "value": "530324",
            "parentVal": "530300"
          },
          {
            "text": "富源县",
            "value": "530325",
            "parentVal": "530300"
          },
          {
            "text": "会泽县",
            "value": "530326",
            "parentVal": "530300"
          },
          {
            "text": "沾益县",
            "value": "530328",
            "parentVal": "530300"
          },
          {
            "text": "宣威市",
            "value": "530381",
            "parentVal": "530300"
          },
          {
            "text": "市辖区",
            "value": "530401",
            "parentVal": "530400"
          },
          {
            "text": "红塔区",
            "value": "530402",
            "parentVal": "530400"
          },
          {
            "text": "江川县",
            "value": "530421",
            "parentVal": "530400"
          },
          {
            "text": "澄江县",
            "value": "530422",
            "parentVal": "530400"
          },
          {
            "text": "通海县",
            "value": "530423",
            "parentVal": "530400"
          },
          {
            "text": "华宁县",
            "value": "530424",
            "parentVal": "530400"
          },
          {
            "text": "易门县",
            "value": "530425",
            "parentVal": "530400"
          },
          {
            "text": "峨山彝族自治县",
            "value": "530426",
            "parentVal": "530400"
          },
          {
            "text": "新平彝族傣族自治县",
            "value": "530427",
            "parentVal": "530400"
          },
          {
            "text": "元江哈尼族彝族傣族自治县",
            "value": "530428",
            "parentVal": "530400"
          },
          {
            "text": "市辖区",
            "value": "530501",
            "parentVal": "530500"
          },
          {
            "text": "隆阳区",
            "value": "530502",
            "parentVal": "530500"
          },
          {
            "text": "施甸县",
            "value": "530521",
            "parentVal": "530500"
          },
          {
            "text": "腾冲县",
            "value": "530522",
            "parentVal": "530500"
          },
          {
            "text": "龙陵县",
            "value": "530523",
            "parentVal": "530500"
          },
          {
            "text": "昌宁县",
            "value": "530524",
            "parentVal": "530500"
          },
          {
            "text": "市辖区",
            "value": "530601",
            "parentVal": "530600"
          },
          {
            "text": "昭阳区",
            "value": "530602",
            "parentVal": "530600"
          },
          {
            "text": "鲁甸县",
            "value": "530621",
            "parentVal": "530600"
          },
          {
            "text": "巧家县",
            "value": "530622",
            "parentVal": "530600"
          },
          {
            "text": "盐津县",
            "value": "530623",
            "parentVal": "530600"
          },
          {
            "text": "大关县",
            "value": "530624",
            "parentVal": "530600"
          },
          {
            "text": "永善县",
            "value": "530625",
            "parentVal": "530600"
          },
          {
            "text": "绥江县",
            "value": "530626",
            "parentVal": "530600"
          },
          {
            "text": "镇雄县",
            "value": "530627",
            "parentVal": "530600"
          },
          {
            "text": "彝良县",
            "value": "530628",
            "parentVal": "530600"
          },
          {
            "text": "威信县",
            "value": "530629",
            "parentVal": "530600"
          },
          {
            "text": "水富县",
            "value": "530630",
            "parentVal": "530600"
          },
          {
            "text": "市辖区",
            "value": "530701",
            "parentVal": "530700"
          },
          {
            "text": "古城区",
            "value": "530702",
            "parentVal": "530700"
          },
          {
            "text": "玉龙纳西族自治县",
            "value": "530721",
            "parentVal": "530700"
          },
          {
            "text": "永胜县",
            "value": "530722",
            "parentVal": "530700"
          },
          {
            "text": "华坪县",
            "value": "530723",
            "parentVal": "530700"
          },
          {
            "text": "宁蒗彝族自治县",
            "value": "530724",
            "parentVal": "530700"
          },
          {
            "text": "市辖区",
            "value": "530801",
            "parentVal": "530800"
          },
          {
            "text": "思茅区",
            "value": "530802",
            "parentVal": "530800"
          },
          {
            "text": "宁洱哈尼族彝族自治县",
            "value": "530821",
            "parentVal": "530800"
          },
          {
            "text": "墨江哈尼族自治县",
            "value": "530822",
            "parentVal": "530800"
          },
          {
            "text": "景东彝族自治县",
            "value": "530823",
            "parentVal": "530800"
          },
          {
            "text": "景谷傣族彝族自治县",
            "value": "530824",
            "parentVal": "530800"
          },
          {
            "text": "镇沅彝族哈尼族拉祜族自治县",
            "value": "530825",
            "parentVal": "530800"
          },
          {
            "text": "江城哈尼族彝族自治县",
            "value": "530826",
            "parentVal": "530800"
          },
          {
            "text": "孟连傣族拉祜族佤族自治县",
            "value": "530827",
            "parentVal": "530800"
          },
          {
            "text": "澜沧拉祜族自治县",
            "value": "530828",
            "parentVal": "530800"
          },
          {
            "text": "西盟佤族自治县",
            "value": "530829",
            "parentVal": "530800"
          },
          {
            "text": "市辖区",
            "value": "530901",
            "parentVal": "530900"
          },
          {
            "text": "临翔区",
            "value": "530902",
            "parentVal": "530900"
          },
          {
            "text": "凤庆县",
            "value": "530921",
            "parentVal": "530900"
          },
          {
            "text": "云县",
            "value": "530922",
            "parentVal": "530900"
          },
          {
            "text": "永德县",
            "value": "530923",
            "parentVal": "530900"
          },
          {
            "text": "镇康县",
            "value": "530924",
            "parentVal": "530900"
          },
          {
            "text": "双江拉祜族佤族布朗族傣族自治县",
            "value": "530925",
            "parentVal": "530900"
          },
          {
            "text": "耿马傣族佤族自治县",
            "value": "530926",
            "parentVal": "530900"
          },
          {
            "text": "沧源佤族自治县",
            "value": "530927",
            "parentVal": "530900"
          },
          {
            "text": "楚雄市",
            "value": "532301",
            "parentVal": "532300"
          },
          {
            "text": "双柏县",
            "value": "532322",
            "parentVal": "532300"
          },
          {
            "text": "牟定县",
            "value": "532323",
            "parentVal": "532300"
          },
          {
            "text": "南华县",
            "value": "532324",
            "parentVal": "532300"
          },
          {
            "text": "姚安县",
            "value": "532325",
            "parentVal": "532300"
          },
          {
            "text": "大姚县",
            "value": "532326",
            "parentVal": "532300"
          },
          {
            "text": "永仁县",
            "value": "532327",
            "parentVal": "532300"
          },
          {
            "text": "元谋县",
            "value": "532328",
            "parentVal": "532300"
          },
          {
            "text": "武定县",
            "value": "532329",
            "parentVal": "532300"
          },
          {
            "text": "禄丰县",
            "value": "532331",
            "parentVal": "532300"
          },
          {
            "text": "个旧市",
            "value": "532501",
            "parentVal": "532500"
          },
          {
            "text": "开远市",
            "value": "532502",
            "parentVal": "532500"
          },
          {
            "text": "蒙自市",
            "value": "532503",
            "parentVal": "532500"
          },
          {
            "text": "弥勒市",
            "value": "532504",
            "parentVal": "532500"
          },
          {
            "text": "屏边苗族自治县",
            "value": "532523",
            "parentVal": "532500"
          },
          {
            "text": "建水县",
            "value": "532524",
            "parentVal": "532500"
          },
          {
            "text": "石屏县",
            "value": "532525",
            "parentVal": "532500"
          },
          {
            "text": "泸西县",
            "value": "532527",
            "parentVal": "532500"
          },
          {
            "text": "元阳县",
            "value": "532528",
            "parentVal": "532500"
          },
          {
            "text": "红河县",
            "value": "532529",
            "parentVal": "532500"
          },
          {
            "text": "金平苗族瑶族傣族自治县",
            "value": "532530",
            "parentVal": "532500"
          },
          {
            "text": "绿春县",
            "value": "532531",
            "parentVal": "532500"
          },
          {
            "text": "河口瑶族自治县",
            "value": "532532",
            "parentVal": "532500"
          },
          {
            "text": "文山市",
            "value": "532601",
            "parentVal": "532600"
          },
          {
            "text": "砚山县",
            "value": "532622",
            "parentVal": "532600"
          },
          {
            "text": "西畴县",
            "value": "532623",
            "parentVal": "532600"
          },
          {
            "text": "麻栗坡县",
            "value": "532624",
            "parentVal": "532600"
          },
          {
            "text": "马关县",
            "value": "532625",
            "parentVal": "532600"
          },
          {
            "text": "丘北县",
            "value": "532626",
            "parentVal": "532600"
          },
          {
            "text": "广南县",
            "value": "532627",
            "parentVal": "532600"
          },
          {
            "text": "富宁县",
            "value": "532628",
            "parentVal": "532600"
          },
          {
            "text": "景洪市",
            "value": "532801",
            "parentVal": "532800"
          },
          {
            "text": "勐海县",
            "value": "532822",
            "parentVal": "532800"
          },
          {
            "text": "勐腊县",
            "value": "532823",
            "parentVal": "532800"
          },
          {
            "text": "大理市",
            "value": "532901",
            "parentVal": "532900"
          },
          {
            "text": "漾濞彝族自治县",
            "value": "532922",
            "parentVal": "532900"
          },
          {
            "text": "祥云县",
            "value": "532923",
            "parentVal": "532900"
          },
          {
            "text": "宾川县",
            "value": "532924",
            "parentVal": "532900"
          },
          {
            "text": "弥渡县",
            "value": "532925",
            "parentVal": "532900"
          },
          {
            "text": "南涧彝族自治县",
            "value": "532926",
            "parentVal": "532900"
          },
          {
            "text": "巍山彝族回族自治县",
            "value": "532927",
            "parentVal": "532900"
          },
          {
            "text": "永平县",
            "value": "532928",
            "parentVal": "532900"
          },
          {
            "text": "云龙县",
            "value": "532929",
            "parentVal": "532900"
          },
          {
            "text": "洱源县",
            "value": "532930",
            "parentVal": "532900"
          },
          {
            "text": "剑川县",
            "value": "532931",
            "parentVal": "532900"
          },
          {
            "text": "鹤庆县",
            "value": "532932",
            "parentVal": "532900"
          },
          {
            "text": "瑞丽市",
            "value": "533102",
            "parentVal": "533100"
          },
          {
            "text": "芒市",
            "value": "533103",
            "parentVal": "533100"
          },
          {
            "text": "梁河县",
            "value": "533122",
            "parentVal": "533100"
          },
          {
            "text": "盈江县",
            "value": "533123",
            "parentVal": "533100"
          },
          {
            "text": "陇川县",
            "value": "533124",
            "parentVal": "533100"
          },
          {
            "text": "泸水县",
            "value": "533321",
            "parentVal": "533300"
          },
          {
            "text": "福贡县",
            "value": "533323",
            "parentVal": "533300"
          },
          {
            "text": "贡山独龙族怒族自治县",
            "value": "533324",
            "parentVal": "533300"
          },
          {
            "text": "兰坪白族普米族自治县",
            "value": "533325",
            "parentVal": "533300"
          },
          {
            "text": "香格里拉县",
            "value": "533421",
            "parentVal": "533400"
          },
          {
            "text": "德钦县",
            "value": "533422",
            "parentVal": "533400"
          },
          {
            "text": "维西傈僳族自治县",
            "value": "533423",
            "parentVal": "533400"
          },
          {
            "text": "市辖区",
            "value": "540101",
            "parentVal": "540100"
          },
          {
            "text": "城关区",
            "value": "540102",
            "parentVal": "540100"
          },
          {
            "text": "林周县",
            "value": "540121",
            "parentVal": "540100"
          },
          {
            "text": "当雄县",
            "value": "540122",
            "parentVal": "540100"
          },
          {
            "text": "尼木县",
            "value": "540123",
            "parentVal": "540100"
          },
          {
            "text": "曲水县",
            "value": "540124",
            "parentVal": "540100"
          },
          {
            "text": "堆龙德庆县",
            "value": "540125",
            "parentVal": "540100"
          },
          {
            "text": "达孜县",
            "value": "540126",
            "parentVal": "540100"
          },
          {
            "text": "墨竹工卡县",
            "value": "540127",
            "parentVal": "540100"
          },
          {
            "text": "昌都县",
            "value": "542121",
            "parentVal": "542100"
          },
          {
            "text": "江达县",
            "value": "542122",
            "parentVal": "542100"
          },
          {
            "text": "贡觉县",
            "value": "542123",
            "parentVal": "542100"
          },
          {
            "text": "类乌齐县",
            "value": "542124",
            "parentVal": "542100"
          },
          {
            "text": "丁青县",
            "value": "542125",
            "parentVal": "542100"
          },
          {
            "text": "察雅县",
            "value": "542126",
            "parentVal": "542100"
          },
          {
            "text": "八宿县",
            "value": "542127",
            "parentVal": "542100"
          },
          {
            "text": "左贡县",
            "value": "542128",
            "parentVal": "542100"
          },
          {
            "text": "芒康县",
            "value": "542129",
            "parentVal": "542100"
          },
          {
            "text": "洛隆县",
            "value": "542132",
            "parentVal": "542100"
          },
          {
            "text": "边坝县",
            "value": "542133",
            "parentVal": "542100"
          },
          {
            "text": "乃东县",
            "value": "542221",
            "parentVal": "542200"
          },
          {
            "text": "扎囊县",
            "value": "542222",
            "parentVal": "542200"
          },
          {
            "text": "贡嘎县",
            "value": "542223",
            "parentVal": "542200"
          },
          {
            "text": "桑日县",
            "value": "542224",
            "parentVal": "542200"
          },
          {
            "text": "琼结县",
            "value": "542225",
            "parentVal": "542200"
          },
          {
            "text": "曲松县",
            "value": "542226",
            "parentVal": "542200"
          },
          {
            "text": "措美县",
            "value": "542227",
            "parentVal": "542200"
          },
          {
            "text": "洛扎县",
            "value": "542228",
            "parentVal": "542200"
          },
          {
            "text": "加查县",
            "value": "542229",
            "parentVal": "542200"
          },
          {
            "text": "隆子县",
            "value": "542231",
            "parentVal": "542200"
          },
          {
            "text": "错那县",
            "value": "542232",
            "parentVal": "542200"
          },
          {
            "text": "浪卡子县",
            "value": "542233",
            "parentVal": "542200"
          },
          {
            "text": "日喀则市",
            "value": "542301",
            "parentVal": "542300"
          },
          {
            "text": "南木林县",
            "value": "542322",
            "parentVal": "542300"
          },
          {
            "text": "江孜县",
            "value": "542323",
            "parentVal": "542300"
          },
          {
            "text": "定日县",
            "value": "542324",
            "parentVal": "542300"
          },
          {
            "text": "萨迦县",
            "value": "542325",
            "parentVal": "542300"
          },
          {
            "text": "拉孜县",
            "value": "542326",
            "parentVal": "542300"
          },
          {
            "text": "昂仁县",
            "value": "542327",
            "parentVal": "542300"
          },
          {
            "text": "谢通门县",
            "value": "542328",
            "parentVal": "542300"
          },
          {
            "text": "白朗县",
            "value": "542329",
            "parentVal": "542300"
          },
          {
            "text": "仁布县",
            "value": "542330",
            "parentVal": "542300"
          },
          {
            "text": "康马县",
            "value": "542331",
            "parentVal": "542300"
          },
          {
            "text": "定结县",
            "value": "542332",
            "parentVal": "542300"
          },
          {
            "text": "仲巴县",
            "value": "542333",
            "parentVal": "542300"
          },
          {
            "text": "亚东县",
            "value": "542334",
            "parentVal": "542300"
          },
          {
            "text": "吉隆县",
            "value": "542335",
            "parentVal": "542300"
          },
          {
            "text": "聂拉木县",
            "value": "542336",
            "parentVal": "542300"
          },
          {
            "text": "萨嘎县",
            "value": "542337",
            "parentVal": "542300"
          },
          {
            "text": "岗巴县",
            "value": "542338",
            "parentVal": "542300"
          },
          {
            "text": "那曲县",
            "value": "542421",
            "parentVal": "542400"
          },
          {
            "text": "嘉黎县",
            "value": "542422",
            "parentVal": "542400"
          },
          {
            "text": "比如县",
            "value": "542423",
            "parentVal": "542400"
          },
          {
            "text": "聂荣县",
            "value": "542424",
            "parentVal": "542400"
          },
          {
            "text": "安多县",
            "value": "542425",
            "parentVal": "542400"
          },
          {
            "text": "申扎县",
            "value": "542426",
            "parentVal": "542400"
          },
          {
            "text": "索县",
            "value": "542427",
            "parentVal": "542400"
          },
          {
            "text": "班戈县",
            "value": "542428",
            "parentVal": "542400"
          },
          {
            "text": "巴青县",
            "value": "542429",
            "parentVal": "542400"
          },
          {
            "text": "尼玛县",
            "value": "542430",
            "parentVal": "542400"
          },
          {
            "text": "双湖县",
            "value": "542431",
            "parentVal": "542400"
          },
          {
            "text": "普兰县",
            "value": "542521",
            "parentVal": "542500"
          },
          {
            "text": "札达县",
            "value": "542522",
            "parentVal": "542500"
          },
          {
            "text": "噶尔县",
            "value": "542523",
            "parentVal": "542500"
          },
          {
            "text": "日土县",
            "value": "542524",
            "parentVal": "542500"
          },
          {
            "text": "革吉县",
            "value": "542525",
            "parentVal": "542500"
          },
          {
            "text": "改则县",
            "value": "542526",
            "parentVal": "542500"
          },
          {
            "text": "措勤县",
            "value": "542527",
            "parentVal": "542500"
          },
          {
            "text": "林芝县",
            "value": "542621",
            "parentVal": "542600"
          },
          {
            "text": "工布江达县",
            "value": "542622",
            "parentVal": "542600"
          },
          {
            "text": "米林县",
            "value": "542623",
            "parentVal": "542600"
          },
          {
            "text": "墨脱县",
            "value": "542624",
            "parentVal": "542600"
          },
          {
            "text": "波密县",
            "value": "542625",
            "parentVal": "542600"
          },
          {
            "text": "察隅县",
            "value": "542626",
            "parentVal": "542600"
          },
          {
            "text": "朗县",
            "value": "542627",
            "parentVal": "542600"
          },
          {
            "text": "市辖区",
            "value": "610101",
            "parentVal": "610100"
          },
          {
            "text": "新城区",
            "value": "610102",
            "parentVal": "610100"
          },
          {
            "text": "碑林区",
            "value": "610103",
            "parentVal": "610100"
          },
          {
            "text": "莲湖区",
            "value": "610104",
            "parentVal": "610100"
          },
          {
            "text": "灞桥区",
            "value": "610111",
            "parentVal": "610100"
          },
          {
            "text": "未央区",
            "value": "610112",
            "parentVal": "610100"
          },
          {
            "text": "雁塔区",
            "value": "610113",
            "parentVal": "610100"
          },
          {
            "text": "阎良区",
            "value": "610114",
            "parentVal": "610100"
          },
          {
            "text": "临潼区",
            "value": "610115",
            "parentVal": "610100"
          },
          {
            "text": "长安区",
            "value": "610116",
            "parentVal": "610100"
          },
          {
            "text": "蓝田县",
            "value": "610122",
            "parentVal": "610100"
          },
          {
            "text": "周至县",
            "value": "610124",
            "parentVal": "610100"
          },
          {
            "text": "户县",
            "value": "610125",
            "parentVal": "610100"
          },
          {
            "text": "高陵县",
            "value": "610126",
            "parentVal": "610100"
          },
          {
            "text": "市辖区",
            "value": "610201",
            "parentVal": "610200"
          },
          {
            "text": "王益区",
            "value": "610202",
            "parentVal": "610200"
          },
          {
            "text": "印台区",
            "value": "610203",
            "parentVal": "610200"
          },
          {
            "text": "耀州区",
            "value": "610204",
            "parentVal": "610200"
          },
          {
            "text": "宜君县",
            "value": "610222",
            "parentVal": "610200"
          },
          {
            "text": "市辖区",
            "value": "610301",
            "parentVal": "610300"
          },
          {
            "text": "渭滨区",
            "value": "610302",
            "parentVal": "610300"
          },
          {
            "text": "金台区",
            "value": "610303",
            "parentVal": "610300"
          },
          {
            "text": "陈仓区",
            "value": "610304",
            "parentVal": "610300"
          },
          {
            "text": "凤翔县",
            "value": "610322",
            "parentVal": "610300"
          },
          {
            "text": "岐山县",
            "value": "610323",
            "parentVal": "610300"
          },
          {
            "text": "扶风县",
            "value": "610324",
            "parentVal": "610300"
          },
          {
            "text": "眉县",
            "value": "610326",
            "parentVal": "610300"
          },
          {
            "text": "陇县",
            "value": "610327",
            "parentVal": "610300"
          },
          {
            "text": "千阳县",
            "value": "610328",
            "parentVal": "610300"
          },
          {
            "text": "麟游县",
            "value": "610329",
            "parentVal": "610300"
          },
          {
            "text": "凤县",
            "value": "610330",
            "parentVal": "610300"
          },
          {
            "text": "太白县",
            "value": "610331",
            "parentVal": "610300"
          },
          {
            "text": "市辖区",
            "value": "610401",
            "parentVal": "610400"
          },
          {
            "text": "秦都区",
            "value": "610402",
            "parentVal": "610400"
          },
          {
            "text": "杨陵区",
            "value": "610403",
            "parentVal": "610400"
          },
          {
            "text": "渭城区",
            "value": "610404",
            "parentVal": "610400"
          },
          {
            "text": "三原县",
            "value": "610422",
            "parentVal": "610400"
          },
          {
            "text": "泾阳县",
            "value": "610423",
            "parentVal": "610400"
          },
          {
            "text": "乾县",
            "value": "610424",
            "parentVal": "610400"
          },
          {
            "text": "礼泉县",
            "value": "610425",
            "parentVal": "610400"
          },
          {
            "text": "永寿县",
            "value": "610426",
            "parentVal": "610400"
          },
          {
            "text": "彬县",
            "value": "610427",
            "parentVal": "610400"
          },
          {
            "text": "长武县",
            "value": "610428",
            "parentVal": "610400"
          },
          {
            "text": "旬邑县",
            "value": "610429",
            "parentVal": "610400"
          },
          {
            "text": "淳化县",
            "value": "610430",
            "parentVal": "610400"
          },
          {
            "text": "武功县",
            "value": "610431",
            "parentVal": "610400"
          },
          {
            "text": "兴平市",
            "value": "610481",
            "parentVal": "610400"
          },
          {
            "text": "市辖区",
            "value": "610501",
            "parentVal": "610500"
          },
          {
            "text": "临渭区",
            "value": "610502",
            "parentVal": "610500"
          },
          {
            "text": "华县",
            "value": "610521",
            "parentVal": "610500"
          },
          {
            "text": "潼关县",
            "value": "610522",
            "parentVal": "610500"
          },
          {
            "text": "大荔县",
            "value": "610523",
            "parentVal": "610500"
          },
          {
            "text": "合阳县",
            "value": "610524",
            "parentVal": "610500"
          },
          {
            "text": "澄城县",
            "value": "610525",
            "parentVal": "610500"
          },
          {
            "text": "蒲城县",
            "value": "610526",
            "parentVal": "610500"
          },
          {
            "text": "白水县",
            "value": "610527",
            "parentVal": "610500"
          },
          {
            "text": "富平县",
            "value": "610528",
            "parentVal": "610500"
          },
          {
            "text": "韩城市",
            "value": "610581",
            "parentVal": "610500"
          },
          {
            "text": "华阴市",
            "value": "610582",
            "parentVal": "610500"
          },
          {
            "text": "市辖区",
            "value": "610601",
            "parentVal": "610600"
          },
          {
            "text": "宝塔区",
            "value": "610602",
            "parentVal": "610600"
          },
          {
            "text": "延长县",
            "value": "610621",
            "parentVal": "610600"
          },
          {
            "text": "延川县",
            "value": "610622",
            "parentVal": "610600"
          },
          {
            "text": "子长县",
            "value": "610623",
            "parentVal": "610600"
          },
          {
            "text": "安塞县",
            "value": "610624",
            "parentVal": "610600"
          },
          {
            "text": "志丹县",
            "value": "610625",
            "parentVal": "610600"
          },
          {
            "text": "吴起县",
            "value": "610626",
            "parentVal": "610600"
          },
          {
            "text": "甘泉县",
            "value": "610627",
            "parentVal": "610600"
          },
          {
            "text": "富县",
            "value": "610628",
            "parentVal": "610600"
          },
          {
            "text": "洛川县",
            "value": "610629",
            "parentVal": "610600"
          },
          {
            "text": "宜川县",
            "value": "610630",
            "parentVal": "610600"
          },
          {
            "text": "黄龙县",
            "value": "610631",
            "parentVal": "610600"
          },
          {
            "text": "黄陵县",
            "value": "610632",
            "parentVal": "610600"
          },
          {
            "text": "市辖区",
            "value": "610701",
            "parentVal": "610700"
          },
          {
            "text": "汉台区",
            "value": "610702",
            "parentVal": "610700"
          },
          {
            "text": "南郑县",
            "value": "610721",
            "parentVal": "610700"
          },
          {
            "text": "城固县",
            "value": "610722",
            "parentVal": "610700"
          },
          {
            "text": "洋县",
            "value": "610723",
            "parentVal": "610700"
          },
          {
            "text": "西乡县",
            "value": "610724",
            "parentVal": "610700"
          },
          {
            "text": "勉县",
            "value": "610725",
            "parentVal": "610700"
          },
          {
            "text": "宁强县",
            "value": "610726",
            "parentVal": "610700"
          },
          {
            "text": "略阳县",
            "value": "610727",
            "parentVal": "610700"
          },
          {
            "text": "镇巴县",
            "value": "610728",
            "parentVal": "610700"
          },
          {
            "text": "留坝县",
            "value": "610729",
            "parentVal": "610700"
          },
          {
            "text": "佛坪县",
            "value": "610730",
            "parentVal": "610700"
          },
          {
            "text": "市辖区",
            "value": "610801",
            "parentVal": "610800"
          },
          {
            "text": "榆阳区",
            "value": "610802",
            "parentVal": "610800"
          },
          {
            "text": "神木县",
            "value": "610821",
            "parentVal": "610800"
          },
          {
            "text": "府谷县",
            "value": "610822",
            "parentVal": "610800"
          },
          {
            "text": "横山县",
            "value": "610823",
            "parentVal": "610800"
          },
          {
            "text": "靖边县",
            "value": "610824",
            "parentVal": "610800"
          },
          {
            "text": "定边县",
            "value": "610825",
            "parentVal": "610800"
          },
          {
            "text": "绥德县",
            "value": "610826",
            "parentVal": "610800"
          },
          {
            "text": "米脂县",
            "value": "610827",
            "parentVal": "610800"
          },
          {
            "text": "佳县",
            "value": "610828",
            "parentVal": "610800"
          },
          {
            "text": "吴堡县",
            "value": "610829",
            "parentVal": "610800"
          },
          {
            "text": "清涧县",
            "value": "610830",
            "parentVal": "610800"
          },
          {
            "text": "子洲县",
            "value": "610831",
            "parentVal": "610800"
          },
          {
            "text": "市辖区",
            "value": "610901",
            "parentVal": "610900"
          },
          {
            "text": "汉滨区",
            "value": "610902",
            "parentVal": "610900"
          },
          {
            "text": "汉阴县",
            "value": "610921",
            "parentVal": "610900"
          },
          {
            "text": "石泉县",
            "value": "610922",
            "parentVal": "610900"
          },
          {
            "text": "宁陕县",
            "value": "610923",
            "parentVal": "610900"
          },
          {
            "text": "紫阳县",
            "value": "610924",
            "parentVal": "610900"
          },
          {
            "text": "岚皋县",
            "value": "610925",
            "parentVal": "610900"
          },
          {
            "text": "平利县",
            "value": "610926",
            "parentVal": "610900"
          },
          {
            "text": "镇坪县",
            "value": "610927",
            "parentVal": "610900"
          },
          {
            "text": "旬阳县",
            "value": "610928",
            "parentVal": "610900"
          },
          {
            "text": "白河县",
            "value": "610929",
            "parentVal": "610900"
          },
          {
            "text": "市辖区",
            "value": "611001",
            "parentVal": "611000"
          },
          {
            "text": "商州区",
            "value": "611002",
            "parentVal": "611000"
          },
          {
            "text": "洛南县",
            "value": "611021",
            "parentVal": "611000"
          },
          {
            "text": "丹凤县",
            "value": "611022",
            "parentVal": "611000"
          },
          {
            "text": "商南县",
            "value": "611023",
            "parentVal": "611000"
          },
          {
            "text": "山阳县",
            "value": "611024",
            "parentVal": "611000"
          },
          {
            "text": "镇安县",
            "value": "611025",
            "parentVal": "611000"
          },
          {
            "text": "柞水县",
            "value": "611026",
            "parentVal": "611000"
          },
          {
            "text": "市辖区",
            "value": "620101",
            "parentVal": "620100"
          },
          {
            "text": "城关区",
            "value": "620102",
            "parentVal": "620100"
          },
          {
            "text": "七里河区",
            "value": "620103",
            "parentVal": "620100"
          },
          {
            "text": "西固区",
            "value": "620104",
            "parentVal": "620100"
          },
          {
            "text": "安宁区",
            "value": "620105",
            "parentVal": "620100"
          },
          {
            "text": "红古区",
            "value": "620111",
            "parentVal": "620100"
          },
          {
            "text": "永登县",
            "value": "620121",
            "parentVal": "620100"
          },
          {
            "text": "皋兰县",
            "value": "620122",
            "parentVal": "620100"
          },
          {
            "text": "榆中县",
            "value": "620123",
            "parentVal": "620100"
          },
          {
            "text": "市辖区",
            "value": "620201",
            "parentVal": "620200"
          },
          {
            "text": "市辖区",
            "value": "620301",
            "parentVal": "620300"
          },
          {
            "text": "金川区",
            "value": "620302",
            "parentVal": "620300"
          },
          {
            "text": "永昌县",
            "value": "620321",
            "parentVal": "620300"
          },
          {
            "text": "市辖区",
            "value": "620401",
            "parentVal": "620400"
          },
          {
            "text": "白银区",
            "value": "620402",
            "parentVal": "620400"
          },
          {
            "text": "平川区",
            "value": "620403",
            "parentVal": "620400"
          },
          {
            "text": "靖远县",
            "value": "620421",
            "parentVal": "620400"
          },
          {
            "text": "会宁县",
            "value": "620422",
            "parentVal": "620400"
          },
          {
            "text": "景泰县",
            "value": "620423",
            "parentVal": "620400"
          },
          {
            "text": "市辖区",
            "value": "620501",
            "parentVal": "620500"
          },
          {
            "text": "秦州区",
            "value": "620502",
            "parentVal": "620500"
          },
          {
            "text": "麦积区",
            "value": "620503",
            "parentVal": "620500"
          },
          {
            "text": "清水县",
            "value": "620521",
            "parentVal": "620500"
          },
          {
            "text": "秦安县",
            "value": "620522",
            "parentVal": "620500"
          },
          {
            "text": "甘谷县",
            "value": "620523",
            "parentVal": "620500"
          },
          {
            "text": "武山县",
            "value": "620524",
            "parentVal": "620500"
          },
          {
            "text": "张家川回族自治县",
            "value": "620525",
            "parentVal": "620500"
          },
          {
            "text": "市辖区",
            "value": "620601",
            "parentVal": "620600"
          },
          {
            "text": "凉州区",
            "value": "620602",
            "parentVal": "620600"
          },
          {
            "text": "民勤县",
            "value": "620621",
            "parentVal": "620600"
          },
          {
            "text": "古浪县",
            "value": "620622",
            "parentVal": "620600"
          },
          {
            "text": "天祝藏族自治县",
            "value": "620623",
            "parentVal": "620600"
          },
          {
            "text": "市辖区",
            "value": "620701",
            "parentVal": "620700"
          },
          {
            "text": "甘州区",
            "value": "620702",
            "parentVal": "620700"
          },
          {
            "text": "肃南裕固族自治县",
            "value": "620721",
            "parentVal": "620700"
          },
          {
            "text": "民乐县",
            "value": "620722",
            "parentVal": "620700"
          },
          {
            "text": "临泽县",
            "value": "620723",
            "parentVal": "620700"
          },
          {
            "text": "高台县",
            "value": "620724",
            "parentVal": "620700"
          },
          {
            "text": "山丹县",
            "value": "620725",
            "parentVal": "620700"
          },
          {
            "text": "市辖区",
            "value": "620801",
            "parentVal": "620800"
          },
          {
            "text": "崆峒区",
            "value": "620802",
            "parentVal": "620800"
          },
          {
            "text": "泾川县",
            "value": "620821",
            "parentVal": "620800"
          },
          {
            "text": "灵台县",
            "value": "620822",
            "parentVal": "620800"
          },
          {
            "text": "崇信县",
            "value": "620823",
            "parentVal": "620800"
          },
          {
            "text": "华亭县",
            "value": "620824",
            "parentVal": "620800"
          },
          {
            "text": "庄浪县",
            "value": "620825",
            "parentVal": "620800"
          },
          {
            "text": "静宁县",
            "value": "620826",
            "parentVal": "620800"
          },
          {
            "text": "市辖区",
            "value": "620901",
            "parentVal": "620900"
          },
          {
            "text": "肃州区",
            "value": "620902",
            "parentVal": "620900"
          },
          {
            "text": "金塔县",
            "value": "620921",
            "parentVal": "620900"
          },
          {
            "text": "瓜州县",
            "value": "620922",
            "parentVal": "620900"
          },
          {
            "text": "肃北蒙古族自治县",
            "value": "620923",
            "parentVal": "620900"
          },
          {
            "text": "阿克塞哈萨克族自治县",
            "value": "620924",
            "parentVal": "620900"
          },
          {
            "text": "玉门市",
            "value": "620981",
            "parentVal": "620900"
          },
          {
            "text": "敦煌市",
            "value": "620982",
            "parentVal": "620900"
          },
          {
            "text": "市辖区",
            "value": "621001",
            "parentVal": "621000"
          },
          {
            "text": "西峰区",
            "value": "621002",
            "parentVal": "621000"
          },
          {
            "text": "庆城县",
            "value": "621021",
            "parentVal": "621000"
          },
          {
            "text": "环县",
            "value": "621022",
            "parentVal": "621000"
          },
          {
            "text": "华池县",
            "value": "621023",
            "parentVal": "621000"
          },
          {
            "text": "合水县",
            "value": "621024",
            "parentVal": "621000"
          },
          {
            "text": "正宁县",
            "value": "621025",
            "parentVal": "621000"
          },
          {
            "text": "宁县",
            "value": "621026",
            "parentVal": "621000"
          },
          {
            "text": "镇原县",
            "value": "621027",
            "parentVal": "621000"
          },
          {
            "text": "市辖区",
            "value": "621101",
            "parentVal": "621100"
          },
          {
            "text": "安定区",
            "value": "621102",
            "parentVal": "621100"
          },
          {
            "text": "通渭县",
            "value": "621121",
            "parentVal": "621100"
          },
          {
            "text": "陇西县",
            "value": "621122",
            "parentVal": "621100"
          },
          {
            "text": "渭源县",
            "value": "621123",
            "parentVal": "621100"
          },
          {
            "text": "临洮县",
            "value": "621124",
            "parentVal": "621100"
          },
          {
            "text": "漳县",
            "value": "621125",
            "parentVal": "621100"
          },
          {
            "text": "岷县",
            "value": "621126",
            "parentVal": "621100"
          },
          {
            "text": "市辖区",
            "value": "621201",
            "parentVal": "621200"
          },
          {
            "text": "武都区",
            "value": "621202",
            "parentVal": "621200"
          },
          {
            "text": "成县",
            "value": "621221",
            "parentVal": "621200"
          },
          {
            "text": "文县",
            "value": "621222",
            "parentVal": "621200"
          },
          {
            "text": "宕昌县",
            "value": "621223",
            "parentVal": "621200"
          },
          {
            "text": "康县",
            "value": "621224",
            "parentVal": "621200"
          },
          {
            "text": "西和县",
            "value": "621225",
            "parentVal": "621200"
          },
          {
            "text": "礼县",
            "value": "621226",
            "parentVal": "621200"
          },
          {
            "text": "徽县",
            "value": "621227",
            "parentVal": "621200"
          },
          {
            "text": "两当县",
            "value": "621228",
            "parentVal": "621200"
          },
          {
            "text": "临夏市",
            "value": "622901",
            "parentVal": "622900"
          },
          {
            "text": "临夏县",
            "value": "622921",
            "parentVal": "622900"
          },
          {
            "text": "康乐县",
            "value": "622922",
            "parentVal": "622900"
          },
          {
            "text": "永靖县",
            "value": "622923",
            "parentVal": "622900"
          },
          {
            "text": "广河县",
            "value": "622924",
            "parentVal": "622900"
          },
          {
            "text": "和政县",
            "value": "622925",
            "parentVal": "622900"
          },
          {
            "text": "东乡族自治县",
            "value": "622926",
            "parentVal": "622900"
          },
          {
            "text": "积石山保安族东乡族撒拉族自治县",
            "value": "622927",
            "parentVal": "622900"
          },
          {
            "text": "合作市",
            "value": "623001",
            "parentVal": "623000"
          },
          {
            "text": "临潭县",
            "value": "623021",
            "parentVal": "623000"
          },
          {
            "text": "卓尼县",
            "value": "623022",
            "parentVal": "623000"
          },
          {
            "text": "舟曲县",
            "value": "623023",
            "parentVal": "623000"
          },
          {
            "text": "迭部县",
            "value": "623024",
            "parentVal": "623000"
          },
          {
            "text": "玛曲县",
            "value": "623025",
            "parentVal": "623000"
          },
          {
            "text": "碌曲县",
            "value": "623026",
            "parentVal": "623000"
          },
          {
            "text": "夏河县",
            "value": "623027",
            "parentVal": "623000"
          },
          {
            "text": "市辖区",
            "value": "630101",
            "parentVal": "630100"
          },
          {
            "text": "城东区",
            "value": "630102",
            "parentVal": "630100"
          },
          {
            "text": "城中区",
            "value": "630103",
            "parentVal": "630100"
          },
          {
            "text": "城西区",
            "value": "630104",
            "parentVal": "630100"
          },
          {
            "text": "城北区",
            "value": "630105",
            "parentVal": "630100"
          },
          {
            "text": "大通回族土族自治县",
            "value": "630121",
            "parentVal": "630100"
          },
          {
            "text": "湟中县",
            "value": "630122",
            "parentVal": "630100"
          },
          {
            "text": "湟源县",
            "value": "630123",
            "parentVal": "630100"
          },
          {
            "text": "乐都区",
            "value": "630202",
            "parentVal": "630200"
          },
          {
            "text": "平安县",
            "value": "630221",
            "parentVal": "630200"
          },
          {
            "text": "民和回族土族自治县",
            "value": "630222",
            "parentVal": "630200"
          },
          {
            "text": "互助土族自治县",
            "value": "630223",
            "parentVal": "630200"
          },
          {
            "text": "化隆回族自治县",
            "value": "630224",
            "parentVal": "630200"
          },
          {
            "text": "循化撒拉族自治县",
            "value": "630225",
            "parentVal": "630200"
          },
          {
            "text": "门源回族自治县",
            "value": "632221",
            "parentVal": "632200"
          },
          {
            "text": "祁连县",
            "value": "632222",
            "parentVal": "632200"
          },
          {
            "text": "海晏县",
            "value": "632223",
            "parentVal": "632200"
          },
          {
            "text": "刚察县",
            "value": "632224",
            "parentVal": "632200"
          },
          {
            "text": "同仁县",
            "value": "632321",
            "parentVal": "632300"
          },
          {
            "text": "尖扎县",
            "value": "632322",
            "parentVal": "632300"
          },
          {
            "text": "泽库县",
            "value": "632323",
            "parentVal": "632300"
          },
          {
            "text": "河南蒙古族自治县",
            "value": "632324",
            "parentVal": "632300"
          },
          {
            "text": "共和县",
            "value": "632521",
            "parentVal": "632500"
          },
          {
            "text": "同德县",
            "value": "632522",
            "parentVal": "632500"
          },
          {
            "text": "贵德县",
            "value": "632523",
            "parentVal": "632500"
          },
          {
            "text": "兴海县",
            "value": "632524",
            "parentVal": "632500"
          },
          {
            "text": "贵南县",
            "value": "632525",
            "parentVal": "632500"
          },
          {
            "text": "玛沁县",
            "value": "632621",
            "parentVal": "632600"
          },
          {
            "text": "班玛县",
            "value": "632622",
            "parentVal": "632600"
          },
          {
            "text": "甘德县",
            "value": "632623",
            "parentVal": "632600"
          },
          {
            "text": "达日县",
            "value": "632624",
            "parentVal": "632600"
          },
          {
            "text": "久治县",
            "value": "632625",
            "parentVal": "632600"
          },
          {
            "text": "玛多县",
            "value": "632626",
            "parentVal": "632600"
          },
          {
            "text": "玉树市",
            "value": "632701",
            "parentVal": "632700"
          },
          {
            "text": "杂多县",
            "value": "632722",
            "parentVal": "632700"
          },
          {
            "text": "称多县",
            "value": "632723",
            "parentVal": "632700"
          },
          {
            "text": "治多县",
            "value": "632724",
            "parentVal": "632700"
          },
          {
            "text": "囊谦县",
            "value": "632725",
            "parentVal": "632700"
          },
          {
            "text": "曲麻莱县",
            "value": "632726",
            "parentVal": "632700"
          },
          {
            "text": "格尔木市",
            "value": "632801",
            "parentVal": "632800"
          },
          {
            "text": "德令哈市",
            "value": "632802",
            "parentVal": "632800"
          },
          {
            "text": "乌兰县",
            "value": "632821",
            "parentVal": "632800"
          },
          {
            "text": "都兰县",
            "value": "632822",
            "parentVal": "632800"
          },
          {
            "text": "天峻县",
            "value": "632823",
            "parentVal": "632800"
          },
          {
            "text": "市辖区",
            "value": "640101",
            "parentVal": "640100"
          },
          {
            "text": "兴庆区",
            "value": "640104",
            "parentVal": "640100"
          },
          {
            "text": "西夏区",
            "value": "640105",
            "parentVal": "640100"
          },
          {
            "text": "金凤区",
            "value": "640106",
            "parentVal": "640100"
          },
          {
            "text": "永宁县",
            "value": "640121",
            "parentVal": "640100"
          },
          {
            "text": "贺兰县",
            "value": "640122",
            "parentVal": "640100"
          },
          {
            "text": "灵武市",
            "value": "640181",
            "parentVal": "640100"
          },
          {
            "text": "市辖区",
            "value": "640201",
            "parentVal": "640200"
          },
          {
            "text": "大武口区",
            "value": "640202",
            "parentVal": "640200"
          },
          {
            "text": "惠农区",
            "value": "640205",
            "parentVal": "640200"
          },
          {
            "text": "平罗县",
            "value": "640221",
            "parentVal": "640200"
          },
          {
            "text": "市辖区",
            "value": "640301",
            "parentVal": "640300"
          },
          {
            "text": "利通区",
            "value": "640302",
            "parentVal": "640300"
          },
          {
            "text": "红寺堡区",
            "value": "640303",
            "parentVal": "640300"
          },
          {
            "text": "盐池县",
            "value": "640323",
            "parentVal": "640300"
          },
          {
            "text": "同心县",
            "value": "640324",
            "parentVal": "640300"
          },
          {
            "text": "青铜峡市",
            "value": "640381",
            "parentVal": "640300"
          },
          {
            "text": "市辖区",
            "value": "640401",
            "parentVal": "640400"
          },
          {
            "text": "原州区",
            "value": "640402",
            "parentVal": "640400"
          },
          {
            "text": "西吉县",
            "value": "640422",
            "parentVal": "640400"
          },
          {
            "text": "隆德县",
            "value": "640423",
            "parentVal": "640400"
          },
          {
            "text": "泾源县",
            "value": "640424",
            "parentVal": "640400"
          },
          {
            "text": "彭阳县",
            "value": "640425",
            "parentVal": "640400"
          },
          {
            "text": "市辖区",
            "value": "640501",
            "parentVal": "640500"
          },
          {
            "text": "沙坡头区",
            "value": "640502",
            "parentVal": "640500"
          },
          {
            "text": "中宁县",
            "value": "640521",
            "parentVal": "640500"
          },
          {
            "text": "海原县",
            "value": "640522",
            "parentVal": "640500"
          },
          {
            "text": "市辖区",
            "value": "650101",
            "parentVal": "650100"
          },
          {
            "text": "天山区",
            "value": "650102",
            "parentVal": "650100"
          },
          {
            "text": "沙依巴克区",
            "value": "650103",
            "parentVal": "650100"
          },
          {
            "text": "新市区",
            "value": "650104",
            "parentVal": "650100"
          },
          {
            "text": "水磨沟区",
            "value": "650105",
            "parentVal": "650100"
          },
          {
            "text": "头屯河区",
            "value": "650106",
            "parentVal": "650100"
          },
          {
            "text": "达坂城区",
            "value": "650107",
            "parentVal": "650100"
          },
          {
            "text": "米东区",
            "value": "650109",
            "parentVal": "650100"
          },
          {
            "text": "乌鲁木齐县",
            "value": "650121",
            "parentVal": "650100"
          },
          {
            "text": "市辖区",
            "value": "650201",
            "parentVal": "650200"
          },
          {
            "text": "独山子区",
            "value": "650202",
            "parentVal": "650200"
          },
          {
            "text": "克拉玛依区",
            "value": "650203",
            "parentVal": "650200"
          },
          {
            "text": "白碱滩区",
            "value": "650204",
            "parentVal": "650200"
          },
          {
            "text": "乌尔禾区",
            "value": "650205",
            "parentVal": "650200"
          },
          {
            "text": "吐鲁番市",
            "value": "652101",
            "parentVal": "652100"
          },
          {
            "text": "鄯善县",
            "value": "652122",
            "parentVal": "652100"
          },
          {
            "text": "托克逊县",
            "value": "652123",
            "parentVal": "652100"
          },
          {
            "text": "哈密市",
            "value": "652201",
            "parentVal": "652200"
          },
          {
            "text": "巴里坤哈萨克自治县",
            "value": "652222",
            "parentVal": "652200"
          },
          {
            "text": "伊吾县",
            "value": "652223",
            "parentVal": "652200"
          },
          {
            "text": "昌吉市",
            "value": "652301",
            "parentVal": "652300"
          },
          {
            "text": "阜康市",
            "value": "652302",
            "parentVal": "652300"
          },
          {
            "text": "呼图壁县",
            "value": "652323",
            "parentVal": "652300"
          },
          {
            "text": "玛纳斯县",
            "value": "652324",
            "parentVal": "652300"
          },
          {
            "text": "奇台县",
            "value": "652325",
            "parentVal": "652300"
          },
          {
            "text": "吉木萨尔县",
            "value": "652327",
            "parentVal": "652300"
          },
          {
            "text": "木垒哈萨克自治县",
            "value": "652328",
            "parentVal": "652300"
          },
          {
            "text": "博乐市",
            "value": "652701",
            "parentVal": "652700"
          },
          {
            "text": "阿拉山口市",
            "value": "652702",
            "parentVal": "652700"
          },
          {
            "text": "精河县",
            "value": "652722",
            "parentVal": "652700"
          },
          {
            "text": "温泉县",
            "value": "652723",
            "parentVal": "652700"
          },
          {
            "text": "库尔勒市",
            "value": "652801",
            "parentVal": "652800"
          },
          {
            "text": "轮台县",
            "value": "652822",
            "parentVal": "652800"
          },
          {
            "text": "尉犁县",
            "value": "652823",
            "parentVal": "652800"
          },
          {
            "text": "若羌县",
            "value": "652824",
            "parentVal": "652800"
          },
          {
            "text": "且末县",
            "value": "652825",
            "parentVal": "652800"
          },
          {
            "text": "焉耆回族自治县",
            "value": "652826",
            "parentVal": "652800"
          },
          {
            "text": "和静县",
            "value": "652827",
            "parentVal": "652800"
          },
          {
            "text": "和硕县",
            "value": "652828",
            "parentVal": "652800"
          },
          {
            "text": "博湖县",
            "value": "652829",
            "parentVal": "652800"
          },
          {
            "text": "阿克苏市",
            "value": "652901",
            "parentVal": "652900"
          },
          {
            "text": "温宿县",
            "value": "652922",
            "parentVal": "652900"
          },
          {
            "text": "库车县",
            "value": "652923",
            "parentVal": "652900"
          },
          {
            "text": "沙雅县",
            "value": "652924",
            "parentVal": "652900"
          },
          {
            "text": "新和县",
            "value": "652925",
            "parentVal": "652900"
          },
          {
            "text": "拜城县",
            "value": "652926",
            "parentVal": "652900"
          },
          {
            "text": "乌什县",
            "value": "652927",
            "parentVal": "652900"
          },
          {
            "text": "阿瓦提县",
            "value": "652928",
            "parentVal": "652900"
          },
          {
            "text": "柯坪县",
            "value": "652929",
            "parentVal": "652900"
          },
          {
            "text": "阿图什市",
            "value": "653001",
            "parentVal": "653000"
          },
          {
            "text": "阿克陶县",
            "value": "653022",
            "parentVal": "653000"
          },
          {
            "text": "阿合奇县",
            "value": "653023",
            "parentVal": "653000"
          },
          {
            "text": "乌恰县",
            "value": "653024",
            "parentVal": "653000"
          },
          {
            "text": "喀什市",
            "value": "653101",
            "parentVal": "653100"
          },
          {
            "text": "疏附县",
            "value": "653121",
            "parentVal": "653100"
          },
          {
            "text": "疏勒县",
            "value": "653122",
            "parentVal": "653100"
          },
          {
            "text": "英吉沙县",
            "value": "653123",
            "parentVal": "653100"
          },
          {
            "text": "泽普县",
            "value": "653124",
            "parentVal": "653100"
          },
          {
            "text": "莎车县",
            "value": "653125",
            "parentVal": "653100"
          },
          {
            "text": "叶城县",
            "value": "653126",
            "parentVal": "653100"
          },
          {
            "text": "麦盖提县",
            "value": "653127",
            "parentVal": "653100"
          },
          {
            "text": "岳普湖县",
            "value": "653128",
            "parentVal": "653100"
          },
          {
            "text": "伽师县",
            "value": "653129",
            "parentVal": "653100"
          },
          {
            "text": "巴楚县",
            "value": "653130",
            "parentVal": "653100"
          },
          {
            "text": "塔什库尔干塔吉克自治县",
            "value": "653131",
            "parentVal": "653100"
          },
          {
            "text": "和田市",
            "value": "653201",
            "parentVal": "653200"
          },
          {
            "text": "和田县",
            "value": "653221",
            "parentVal": "653200"
          },
          {
            "text": "墨玉县",
            "value": "653222",
            "parentVal": "653200"
          },
          {
            "text": "皮山县",
            "value": "653223",
            "parentVal": "653200"
          },
          {
            "text": "洛浦县",
            "value": "653224",
            "parentVal": "653200"
          },
          {
            "text": "策勒县",
            "value": "653225",
            "parentVal": "653200"
          },
          {
            "text": "于田县",
            "value": "653226",
            "parentVal": "653200"
          },
          {
            "text": "民丰县",
            "value": "653227",
            "parentVal": "653200"
          },
          {
            "text": "伊宁市",
            "value": "654002",
            "parentVal": "654000"
          },
          {
            "text": "奎屯市",
            "value": "654003",
            "parentVal": "654000"
          },
          {
            "text": "伊宁县",
            "value": "654021",
            "parentVal": "654000"
          },
          {
            "text": "察布查尔锡伯自治县",
            "value": "654022",
            "parentVal": "654000"
          },
          {
            "text": "霍城县",
            "value": "654023",
            "parentVal": "654000"
          },
          {
            "text": "巩留县",
            "value": "654024",
            "parentVal": "654000"
          },
          {
            "text": "新源县",
            "value": "654025",
            "parentVal": "654000"
          },
          {
            "text": "昭苏县",
            "value": "654026",
            "parentVal": "654000"
          },
          {
            "text": "特克斯县",
            "value": "654027",
            "parentVal": "654000"
          },
          {
            "text": "尼勒克县",
            "value": "654028",
            "parentVal": "654000"
          },
          {
            "text": "塔城市",
            "value": "654201",
            "parentVal": "654200"
          },
          {
            "text": "乌苏市",
            "value": "654202",
            "parentVal": "654200"
          },
          {
            "text": "额敏县",
            "value": "654221",
            "parentVal": "654200"
          },
          {
            "text": "沙湾县",
            "value": "654223",
            "parentVal": "654200"
          },
          {
            "text": "托里县",
            "value": "654224",
            "parentVal": "654200"
          },
          {
            "text": "裕民县",
            "value": "654225",
            "parentVal": "654200"
          },
          {
            "text": "和布克赛尔蒙古自治县",
            "value": "654226",
            "parentVal": "654200"
          },
          {
            "text": "阿勒泰市",
            "value": "654301",
            "parentVal": "654300"
          },
          {
            "text": "布尔津县",
            "value": "654321",
            "parentVal": "654300"
          },
          {
            "text": "富蕴县",
            "value": "654322",
            "parentVal": "654300"
          },
          {
            "text": "福海县",
            "value": "654323",
            "parentVal": "654300"
          },
          {
            "text": "哈巴河县",
            "value": "654324",
            "parentVal": "654300"
          },
          {
            "text": "青河县",
            "value": "654325",
            "parentVal": "654300"
          },
          {
            "text": "吉木乃县",
            "value": "654326",
            "parentVal": "654300"
          },
          {
            "text": "石河子市",
            "value": "659001",
            "parentVal": "659000"
          },
          {
            "text": "阿拉尔市",
            "value": "659002",
            "parentVal": "659000"
          },
          {
            "text": "图木舒克市",
            "value": "659003",
            "parentVal": "659000"
          },
          {
            "text": "五家渠市",
            "value": "659004",
            "parentVal": "659000"
          },
          {
            "text": "中西区",
            "value": "810101",
            "parentVal": "810100"
          },
          {
            "text": "东区",
            "value": "810102",
            "parentVal": "810100"
          },
          {
            "text": "南区",
            "value": "810103",
            "parentVal": "810100"
          },
          {
            "text": "湾仔区",
            "value": "810104",
            "parentVal": "810100"
          },
          {
            "text": "九龙区",
            "value": "810105",
            "parentVal": "810100"
          },
          {
            "text": "观塘区",
            "value": "810106",
            "parentVal": "810100"
          },
          {
            "text": "深水埗区",
            "value": "810107",
            "parentVal": "810100"
          },
          {
            "text": "黄大仙区",
            "value": "810108",
            "parentVal": "810100"
          },
          {
            "text": "油尖旺区",
            "value": "810109",
            "parentVal": "810100"
          },
          {
            "text": "离岛区",
            "value": "810110",
            "parentVal": "810100"
          },
          {
            "text": "葵青区",
            "value": "810111",
            "parentVal": "810100"
          },
          {
            "text": "北区",
            "value": "810112",
            "parentVal": "810100"
          },
          {
            "text": "西贡区",
            "value": "810113",
            "parentVal": "810100"
          },
          {
            "text": "沙田区",
            "value": "810114",
            "parentVal": "810100"
          },
          {
            "text": "大埔区",
            "value": "810115",
            "parentVal": "810100"
          },
          {
            "text": "荃湾区",
            "value": "810116",
            "parentVal": "810100"
          },
          {
            "text": "屯门区",
            "value": "810117",
            "parentVal": "810100"
          },
          {
            "text": "元朗区",
            "value": "810118",
            "parentVal": "810100"
          },
          {
            "text": "花地玛堂区",
            "value": "820101",
            "parentVal": "820100"
          },
          {
            "text": "圣安多尼堂区",
            "value": "820102",
            "parentVal": "820100"
          },
          {
            "text": "大堂区",
            "value": "820103",
            "parentVal": "820100"
          },
          {
            "text": "望德堂区",
            "value": "820104",
            "parentVal": "820100"
          },
          {
            "text": "风顺堂区",
            "value": "820105",
            "parentVal": "820100"
          },
          {
            "text": "嘉模堂区",
            "value": "820201",
            "parentVal": "820200"
          },
          {
            "text": "圣方济各堂区",
            "value": "820202",
            "parentVal": "820200"
          },
          {
            "text": "路氹城",
            "value": "820301",
            "parentVal": "820300"
          },
          {
            "text": " ",
            "value": "710101",
            "parentVal": "710100"
          }
        ]
      }
    ];
  }

}
