//引入数据模型模块
const Hero = require("../models/hero");

// 查询所有英雄信息路由
const Heros = function (req, res) {
    Hero.find({})
        .sort({ update_at: -1 })
        .then(heros => {
            res.json(heros);
        })
        .catch(err => {
            res.json(err);
        });
}






// 通过ObjectId查询单个英雄信息路由
const getHero = function (req, res){
    Hero.findById(req.params.id)
        .then(hero => {
            res.json(hero);
        })
        .catch(err => {
            res.json(err);
        });
}
// 添加一个英雄信息路由
const addHero = function (req, res) {
    Hero.create(req.body, (err, hero) => {
        if (err) {
            res.json(err);
        } else {
            res.json(hero);
        }
    });
}

//更新一条英雄信息数据路由

const putHero = function (req, res){
    Hero.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $set: {
                name: req.body.name,
                age: req.body.age,
                sex: req.body.sex,
                address: req.body.address,
                dowhat: req.body.dowhat,
                favourite: req.body.favourite,
                explain: req.body.explain
            }
        }, {
            new: true
        })
        .then(hero => res.json(hero))
        .catch(err => res.json(err));
}

// 添加图片路由
const addPic = function (req, res){
    Hero.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: {
                imgArr: req.body.url
            }
        },
        {
            new: true
        })
        .then(hero => res.json(hero))
        .catch(err => res.json(err));
}


//删除一条英雄信息路由

const delHero = function (req, res){
    Hero.findOneAndDelete({
        _id: req.params.id
    })
    .then(hero => res.json({ status: "success", message: "删除成功" }))
    .catch(err => res.json({ status: "fail", message: "删除失败" }));
}
module.exports = {
    Heros: Heros,
    getHero: getHero,
    addHero: addHero,
    putHero: putHero,
    delHero: delHero,
    addPic: addPic
};