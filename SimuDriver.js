// Simulador Corrida Motorista Uber

distancia = parseInt(prompt('Quantos Km tem sua corrida?'))
tempo = parseInt(prompt('Quanto tempo de duração, em minutos, tem sua corrida?'))
pedagio = parseInt(prompt('Informe o valor somado dos pedágios?'))
estimativa = 1.50+distancia*1.20+tempo*0.1125+pedagio

document.write('Você vai ganhar R$'+estimativa.toFixed(2)+'<br>')
estimativa = 2.00+distancia*1.60+tempo*0.15+pedagio
document.write('Pro passageiro irá custar R$'+estimativa.toFixed(2))
