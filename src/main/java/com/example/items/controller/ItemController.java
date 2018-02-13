package com.example.items.controller;


import com.example.items.model.Item;
import com.example.items.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    //Get all items
    @GetMapping("/items")
    public List<Item> getAllItems(){
        return itemRepository.findAll();
    }


    // create an Item

    @PostMapping("/items")
    public Item createItem(@Valid @RequestBody Item item){
        return itemRepository.save(item);
    }

    // Get 1 note
    @GetMapping("/items/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable(value ="id") Long itemId){
        Item item = itemRepository.findOne(itemId);
        if(item == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(item);
    }

    //update a note
    @PutMapping("items/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long itemId, @Valid @RequestBody Item itemDetails){
        Item item = itemRepository.findOne(itemId);
        if(item == null) {
            return ResponseEntity.notFound().build();
        }
        item.setName(itemDetails.getName());
        item.setDescription(itemDetails.getDescription());

        Item updatedItem = itemRepository.save(item);
        return ResponseEntity.ok(updatedItem);
    }


    // delete a note

    @DeleteMapping("items/{id}")
    public ResponseEntity<Item> deleteItem(@PathVariable(value = "id") Long itemId){
        Item item = itemRepository.findOne(itemId);
        if(item == null) {
            return ResponseEntity.notFound().build();
        }

        itemRepository.delete(item);
        return ResponseEntity.ok().build();
    }
}
