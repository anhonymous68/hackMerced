import { Component, OnInit, HostListener } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  width = 100;
  height = 100;

  constructor() {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth * 0.9;
    this.height = win.innerHeight * 0.9;
  }

  // toggle webcam on/off
  showWebcam = true;
  allowCameraSwitch = true;
  multipleWebcamsAvailable = false;
  deviceId: string;
  videoOptions: MediaTrackConstraints = {
    width: { ideal: 1024 },
    height: { ideal: 576 }
  };
  errors: WebcamInitError[] = [];

  // latest snapshotconsole
  
  webcamImage: WebcamImage = null;

  base64Image;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true / false: forward / backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image');
  
    this.webcamImage = webcamImage;
    console.log(this.webcamImage);
    this.base64Image = webcamImage.imageAsBase64;
  }

  cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}