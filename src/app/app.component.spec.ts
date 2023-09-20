import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from './shared/ng-zorro-antd.module';
import { IconsProviderModule } from './shared/icons-provider.module';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ NgZorroAntdModule, IconsProviderModule, AppModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have isCollapsed set to false by default', () => {
    expect(component.isCollapsed).toBeFalse();
  });

  it('should have theme set to true by default', () => {
    expect(component.theme).toBeTrue();
  });
});