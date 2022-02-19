const {Schema,model} = require('mongoose')

const TodoSchema=new Schema(
    {
        task:{type:String,require:true},
        status:{type:Boolean,default:false}
    },
    {
        versionKey:false,
    }
)

module.exports=model("Todo",TodoSchema);