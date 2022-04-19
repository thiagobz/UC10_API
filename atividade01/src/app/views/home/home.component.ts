import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaProd = [
    {
      img: "../../../assets/IMG/CPU.png",
      titulo: "Processador AMD Ryzen 5 5600G, 6-Core, 12-Threads, 5.9GHz (4.4GHz Turbo), Cache 19MB, AM4, 100-100000252BOX",
      p1: "de R$ 2.385,23 por:",
      p2: "à vista",
      p3: "R$1.548,96",
      p4: "no PIX com 12% desconto",
      p5: "R$ 1.760,18",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Teclado.png",
      titulo: "Teclado Opto-Mecanico Redragon Infernal Dragon Viserion Edition RGB Switch Blue, ID582",
      p1: "de R$ 477,16 por:",
      p2: "à vista",
      p3: "R$299,90",
      p4: "no PIX com 12% desconto",
      p5: "R$ 340,80",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Gabinete.png",
      titulo: "Gabinete Gamer Pichau Pouter 3 RGB Lateral De Vidro Preto, PG-P03-RGB",
      p1: "de R$ 730,54 por:",
      p2: "à vista",
      p3: "R$499,90",
      p4: "no PIX com 12% desconto",
      p5: "R$ 568,07",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Headset.png",
      titulo: "Headset Gamer JBL Quantum 400 Preto, JBLQUANTUM400BLK",
      p1: "de R$ 560,07 por:",
      p2: "à vista",
      p3: "R$389,90",
      p4: "no PIX com 12% desconto",
      p5: "R$ 443,07",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    }
  ]
  listaProd2 = [
    {
      img: "../../../assets/IMG/placamae.png",
      titulo: "Placa Mae Asus ROG Maximus Z690 Formula, DDR5, Socket LGA1700, ATX, Chipset Intel Z690, ROG MAXIMUS Z690 FORMULA",
      p1: "de R$ 6.899,90 por:",
      p2: "à vista",
      p3: "R$1.799,96",
      p4: "no PIX com 12% desconto",
      p5: "R$ 7.840,80",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Monitor.png",
      titulo: "Monitor Gamer AOC Legend C27G2ZE, 27 Pol. VA, FHD, 0.5ms, 240Hz, FreeSync Premium, HDMI/DP, C27G2ZE",
      p1: "de R$ 2.953,50 por:",
      p2: "à vista",
      p3: "R$1.799,96",
      p4: "no PIX com 12% desconto",
      p5: "R$ 2.045,41",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Fonte.png",
      titulo: "Fonte DeepCool DA700 ATX 80Plus Bronze, DP-BZ-DA700N",
      p1: "de R$ 545,34 por:",
      p2: "à vista",
      p3: "R$429,90",
      p4: "no PIX com 12% desconto",
      p5: "R$ 488,52",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    },
    {
      img: "../../../assets/IMG/Headset.png",
      titulo: "Headset Gamer JBL Quantum 400 Preto, JBLQUANTUM400BLK",
      p1: "de R$ 560,07 por:",
      p2: "à vista",
      p3: "R$389,90",
      p4: "no PIX com 12% desconto",
      p5: "R$ 443,07",
      p6: "em até 12x de ",
      span: "146,68",
      p7: "sem juros no cartão"
    }
  ]

  //   renderProd() {
  //   let produtos = this.produto


  //   let template = "";

  //   for (let i = 0; i < this.listaProd.length; i++) {
  //     const newProd = this.listaProd[i]
  //     template += `
  //       <div class="produto">
  //       <a href="#prod">
  //       <img src="${newProd.img}" alt="">
  //       <h5>
  //       ${newProd.titulo}
  //       </h5>
  //       <p class="text1">${newProd.p1}</p>
  //       <p class="text2">${newProd.p2}</p>
  //       <p class="text3">${newProd.p3}</p>
  //         <p class="text4">${newProd.p4}</p>
  //         <p class="text5">${newProd.p5}</p>
  //         <p class="text6">${newProd.p6}</p>
  //         <p class="text7">${newProd.p7}</p>
  //       </a>
  //       </div>`
  //   }
  //   produtos.innerHTML = template;
  // }
  // renderProd2() {
  //   let produtos2 = this.produto2


  //   let template2 = "";

  //   for (let i = 0; i < this.listaProd.length; i++) {
  //     const newProd2 = this.listaProd2[i]
  //     template2 += `
  //       <div class="produto">
  //       <a href="#prod">
  //       <img src="${newProd2.img}" alt="">
  //       <h5>
  //       ${newProd2.titulo}
  //       </h5>
  //       <p class="text1">${newProd2.p1}</p>
  //       <p class="text2">${newProd2.p2}</p>
  //       <p class="text3">${newProd2.p3}</p>
  //         <p class="text4">${newProd2.p4}</p>
  //         <p class="text5">${newProd2.p5}</p>
  //         <p class="text6">${newProd2.p6}</p>
  //         <p class="text7">${newProd2.p7}</p>
  //       </a>
  //       </div>`
  //   }
  //   produtos2.innerHTML = template2;
  // }

}
