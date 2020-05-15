import { FileSizePipe } from './filesize.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FileSizePipe', () => {
    describe('Teste Isolado', () => {
        
        const pipe = new FileSizePipe();

        it('Deve converter bytes pra MB', () => {
            expect(pipe.transform(123456789)).toBe('117.74 mb')
        });

        it('Deve converter bytes pra GB', () => {
            
        });

    });
});