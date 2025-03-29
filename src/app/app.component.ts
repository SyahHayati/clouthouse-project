import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import ini
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'clouthouse-project';
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe(
      response => {
        console.log("Full JSON Response:", response); // 🔥 Check full JSON
        if (response && response.content) {
          console.log("Project Details Data:", response.content.projectDetails); //Check `projectDetails`
          this.data = response.content;
        } else {
          console.error("Unexpected JSON structure:", response);
        }
      },
      error => {
        console.error("Error loading JSON:", error);
      }
    );
  }
  
  
  
}
