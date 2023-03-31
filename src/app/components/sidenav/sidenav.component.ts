import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  upperNavbarNavLink: Array<{
    label: string;
    redirect: string;
    color: 'rouge' | 'jaune' | 'bleu' | 'violet';
  }> = [
    {
      label: 'Ajouter une offre de stage',
      redirect: '/offres-de-stage/ajout',
      color: 'rouge',
    },
    {
      label: 'Ajouter une demande de stage',
      redirect: '/demandes-de-stage/ajout',
      color: 'jaune',
    },
    {
      label: 'Ajouter une entreprise',
      redirect: '/entreprises/ajout',
      color: 'bleu',
    },
    {
      label: 'Ajouter un candidat',
      redirect: '/candidats/ajout',
      color: 'violet',
    },
  ];

  screenWidth: any;

  constructor(private router: Router) {}

  isLoginPage() {
    return this.router.url === '/page-login';
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
