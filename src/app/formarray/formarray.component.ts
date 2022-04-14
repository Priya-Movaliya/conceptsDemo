import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  title = 'FormArray Example in Angular Reactive forms';
  percentage: Array<any> = []
  formDetail: FormGroup;
  discount: number = 0;
  amount: number = 0;
  amountArray: Array<any> = []

  constructor(private fb: FormBuilder) {

    this.formDetail = this.fb.group({
      party: this.fb.array([]),
      totalAmount: [''],
      totalDiscount: [''],
      totalValue: ['']
    });

  }
  ngOnInit(): void {

  }

  get party(): FormArray {
    return this.formDetail.get("party") as FormArray
  }

  newData(): FormGroup {
    return this.fb.group({
      name: [''],
      amount: [''],
      discount: [''],
      total: ['']
    })
  }

  addData() {
    this.party.push(this.newData());

  }

  removeData(i: number) {
    this.party.removeAt(i);
    this.onSubmit();
  }

  totalDiscountValue(discountData: any) {
    let finalTotal: number = 0;

    this.percentage.map((element, index) => {
      console.log(discountData * element / 100);
      this.party.at(index).patchValue({ discount: discountData * element / 100 })

      this.amountArray.map((amount, i) => {
        if (index === i) {
          this.party.at(index).patchValue({ total: amount * (1 - ((discountData * element / 100) / 100)) })
          finalTotal += amount * (1 - ((discountData * element / 100) / 100))

        }
      })
    })
    
    this.formDetail.patchValue({ totalValue: finalTotal })

  }
  discountAmount(discountData: any, i: number) {
    this.discount = discountData;

    console.log(this.amount * (1 - (this.discount / 100)));

    this.party.at(i).patchValue({ total: this.amount * (1 - (this.discount / 100)) })

  }

  amountValue(amountData: any, i: number) {

    this.amount = amountData;
    console.log(this.amount * (1 - (this.discount / 100)));

    this.party.at(i).patchValue({ total: this.amount * (1 - (this.discount / 100)) })

  }

  onSubmit() {
    let totalAmountValue: number = 0;
    let totalDiscountValue: number = 0;
    let finalTotal: number = 0;
    this.amountArray = []
    this.percentage = []

    this.formDetail.value.party.map(((element: { amount: any; discount: any; total: any; }) => {

      totalAmountValue += Number(element.amount);
      totalDiscountValue += Number(element.discount);
      finalTotal += Number(element.total);

    }));

    this.formDetail.value.party.map(((element: { discount: any; amount: any; }) => {
      let percentage = element.discount * 100 / totalDiscountValue;

      if (!isNaN(percentage)) {
        this.percentage.push(percentage);
      }
      else {
        this.percentage.push(0);
      }
      console.log(element.amount);


      this.amountArray.push(element.amount);
      console.log(this.amountArray);

    }));


    this.formDetail.patchValue({ totalAmount: totalAmountValue, totalDiscount: totalDiscountValue, totalValue: finalTotal })
    console.log(this.formDetail.value);
  }

}