
const gradient=(score)=>{
 score < 10 ? 'to-slate-300' : 'to-green-500' 

if (score == 10) {
    return '  from-80% to-green-500'
}
else if (score == 9) {
    return 'from-80% to-slate-300'
}
else if (score ==  8) {
    return 'from-70% to-slate-300'
}
else if (score == 7) {
    return 'from-60% to-slate-300'
}
else if (score == 6) {
    return ' from-50% to-slate-300'
}
else{
  return '  from-80% to-green-500'
}

}
export default gradient