function anonymous(it) {
var out='      <tr>\r\n\t    <td class="text-left"><a href=\''+(it.script_name)+'/tx/'+( it.tx.hash )+'\'>'+( it.tx.hash.substring(0, 20) + '...' )+'</a></td>\r\n\t    <td class="text-center"><abbr class="timeago" rel="tooltip" data-animation="false" title="'+( it.tx.time )+'Z">'+( it.tx.time )+' UTC</abbr></td>\r\n\t    <td class="text-right">'+( it.tx.output / it.coin_factor )+'</td>\r\n\t    <td class="text-right">'+( (it.tx.coinage_destroyed / it.coin_factor).toFixed(2) )+'</td>\r\n      </tr>';return out;
}