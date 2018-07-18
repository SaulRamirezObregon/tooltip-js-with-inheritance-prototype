/*** HERENCIA DE PROTOTIPO ***/
var Module = (function(){
    const tooltip = function(identifier){
        this.identifier = identifier;
        this.input = document.querySelector(this.identifier);
        if(!(this instanceof tooltip)){
            return new tooltip(identifier);
        }
    }

    tooltip.prototype.showTooltip = function showTooltip(obj){
         const plantilla = `
             <div class="tooltip">
                 <span class="title">${obj.title}</span>
                 <span class="description">${obj.description}</span>
             </div>`;
         const div = document.querySelector('#tooltip');
         div.innerHTML= plantilla;
         div.style.display='none';
         this.input.addEventListener('click',function(){obj.onApprove()});
         this.input.addEventListener('mouseover',function(){
             div.style.display='block';
         });
         this.input.addEventListener('mouseout',function(){
             div.style.display='none';
         });
    }

    return{
        $:tooltip
    }
})();
