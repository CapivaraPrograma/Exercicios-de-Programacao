fun main() {
    println("Qual valor final que você deseja obter: ")
    var vf = readLine()!!.toDouble()
    println("Qual vai ser a rentabilidade: ")
    var i = readLine()!!.toInt()
    var j = i / 100
    var m: Double = 1.0 + j
    println("Quantos meses ?")
    var meses = readLine()!!.toInt()
    var vi = vf / Math.pow(m.toDouble(), meses.toDouble())
   
    println(vi)
}