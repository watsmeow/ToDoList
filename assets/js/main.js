if (window.location.pathname == '/index') {
    $ondelete = $('#delete')
    $ondelete.click(function(){
        let id = $(this).attr('data-id')

        let request = {
            'url': `http://localhost:7000/api/vi/deleteItem/${id}`, 
            'method': 'DELETE',
        }

        if (confirm("Please confirm deletion of this record")){
            $.ajax(request).done(function(response){
                alert('Data deleted successfully')
                location.reload()
            })
        }
    })
}