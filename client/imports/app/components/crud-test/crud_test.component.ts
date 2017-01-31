/**
 * Created by jakub on 31.01.17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import template from './crud_test.component.html';
import style from "./crud_test.component.scss"
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {IDemoModel} from "../../../../../both/interfaces/idemo.model";
import {Observable} from "rxjs";
import {MeteorObservable} from "meteor-rxjs";
import {DemoCollection} from "../../../../../both/collections/demo.collection";
import {ToastService} from "../../services/toast/toast.service";

@Component({
    selector: 'crud-test-component',
    template,
    styles: [style]
})
export class CrudTestComponent implements OnInit, OnDestroy {
    public elements: Observable<IDemoModel[]>;
    public addDemoForm: FormGroup;

    constructor(private formBuilder: FormBuilder,private ToastService:ToastService) {

    }

    ngOnInit(): void {
        this.addDemoForm = this.formBuilder.group({
            input: ['', Validators.required]
        });

        MeteorObservable.subscribe('DemoCollection').subscribe(() => {
            this.elements = DemoCollection.find({}).zone();
        });
    }

    ngOnDestroy() {
    }

    public addDemo = ()=> {
        let newElement:IDemoModel={
            input:this.addDemoForm.value.input
        };
        DemoCollection.insert(newElement);
    };
    public deleteDemo = (_id)=> {
        DemoCollection.remove(_id);
    };
}