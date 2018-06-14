import {Component, AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  selector : 'app-faq',
  templateUrl : './faq.template.html'
})

export class FaqComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
    var article = $('.faq .article');
    article.addClass('hide');
    article.find('.a').slideUp(100);

    $('.faq .article .trigger').click(function(){
      var myArticle = $(this).parents('.article:first');
      if(myArticle.hasClass('hide')){
        article.addClass('hide').removeClass('show');
        article.find('.a').slideUp(100);
        myArticle.removeClass('hide').addClass('show');
        myArticle.find('.a').slideDown(100);
      } else {
        myArticle.removeClass('show').addClass('hide');
        myArticle.find('.a').slideUp(100);
      }
    });

    $('.faq .hgroup .trigger').click(function(){
      var hidden = $('.faq .article.hide').length;
      if(hidden > 0){
        article.removeClass('hide').addClass('show');
        article.find('.a').slideDown(100);
      } else {
        article.removeClass('show').addClass('hide');
        article.find('.a').slideUp(100);
      }
    });
  }

}
